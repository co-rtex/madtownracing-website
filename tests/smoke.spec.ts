import { expect, test, type Page } from "@playwright/test";

const routes = [
  "/",
  "/team",
  "/racing",
  "/car",
  "/road-to-the-grid",
  "/join",
  "/partners",
  "/journal",
];
const INSTAGRAM = "https://www.instagram.com/madtownracing/";

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

for (const route of routes) {
  test(`${route} renders without errors or overflow`, async ({ page }) => {
    const errors = collectErrors(page);
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });

  test(`${route} has no dead internal links`, async ({ page, request }) => {
    await page.goto(route);
    const hrefs = await page.$$eval("a[href^='/']", (links) => [
      ...new Set(links.map((a) => a.getAttribute("href")!.split("#")[0]!)),
    ]);
    for (const href of hrefs) {
      const res = await request.get(href);
      expect(res.status(), href).toBe(200);
    }
  });
}

test("unknown routes show the custom 404", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /track limits/i })).toBeVisible();
});

test("Instagram links are correct and open in a new tab", async ({ page }) => {
  await page.goto("/");
  const links = page.locator(`a[href='${INSTAGRAM}']`);
  expect(await links.count()).toBeGreaterThan(0);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }
});

test("missing join URL degrades to a designed fallback", async ({ page }) => {
  await page.goto("/join");
  await expect(page.getByText("Application link coming soon").first()).toBeVisible();
});

test("missing partner contact details degrade gracefully", async ({ page }) => {
  await page.goto("/partners");
  await page.getByRole("link", { name: /request partnership deck/i }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByText("Deck in preparation")).toBeVisible();
  await expect(page.getByRole("link", { name: /message @madtownracing/i })).toHaveAttribute(
    "href",
    INSTAGRAM,
  );
});

test("race calendar shows a neutral coming-soon state", async ({ page }) => {
  await page.goto("/racing");
  const calendar = page.locator("section[aria-labelledby='calendar-heading']");
  await expect(calendar.getByRole("heading", { name: /2027 race calendar/i })).toBeVisible();
  await expect(calendar.getByText(/coming soon/i)).toBeVisible();
  await expect(calendar.getByText(/round \d/i)).toHaveCount(0);
  await expect(calendar.locator("svg path[stroke-dasharray]")).toHaveCount(0);
});

test("role explorer updates recommendations", async ({ page }) => {
  await page.goto("/join");
  const business = page.getByRole("button", { name: "Business", exact: true });
  await business.click();
  await expect(business).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("heading", { level: 3, name: "Sponsorship" })).toBeVisible();
  // Keyboard operable
  const media = page.getByRole("button", { name: /photo \/ video \/ design/i });
  await media.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { level: 3, name: "Photography" })).toBeVisible();
});

test("car systems are selectable", async ({ page }) => {
  await page.goto("/car");
  const detail = page.locator("[aria-live='polite'] h3");
  await expect(detail).toHaveText("Suspension");
  await page
    .getByRole("button", { name: /^04 brakes$/i })
    .first()
    .click();
  await expect(detail).toHaveText("Brakes");
  await page
    .getByRole("button", { name: /wheels & tires/i })
    .last()
    .click();
  await expect(detail).toHaveText("Wheels & Tires");
});

test("road to the grid reflects centralized status", async ({ page }) => {
  await page.goto("/road-to-the-grid");
  await expect(page.getByRole("heading", { name: "Form the Team" }).first()).toBeVisible();
  await expect(page.getByText("In Progress").first()).toBeVisible();
});

test.describe("navigation", () => {
  test("desktop header navigates and marks the active route", async ({
    page,
    isMobile,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop" || isMobile);
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "The Car" })
      .click();
    await expect(page).toHaveURL(/\/car$/);
    await expect(
      page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "The Car" }),
    ).toHaveAttribute("aria-current", "page");
  });

  test("mobile menu opens, traps escape, and navigates", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile");
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await toggle.click();
    const dialog = page.getByRole("dialog", { name: "Site navigation" });
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(toggle).toBeFocused();
    await toggle.click();
    await dialog.getByRole("link", { name: /road to the grid/i }).click();
    await expect(page).toHaveURL(/\/road-to-the-grid$/);
    await expect(dialog).toBeHidden();
  });
});

test("content stays visible with reduced motion", async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: "reduce",
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await page.getByRole("heading", { name: /road to the grid/i }).scrollIntoViewIfNeeded();
  const opacity = await page
    .locator("[data-reveal]")
    .last()
    .evaluate((el) => getComputedStyle(el).opacity);
  expect(Number(opacity)).toBe(1);
  await context.close();
});
