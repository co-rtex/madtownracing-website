# MadTown Racing — Website

Public website for **MadTown Racing**, a student-operated collegiate motorsports organization in
Madison, Wisconsin, preparing for wheel-to-wheel competition in the Collegiate Racing Series.

Visual source of truth: [`reference/madtown-website-reference.png`](reference/madtown-website-reference.png).

## Stack

- Next.js 16 (App Router, Cache Components, Turbopack) · React 19 · strict TypeScript
- Tailwind CSS 4 (design tokens in `src/app/globals.css`)
- `next/font` — Barlow Condensed (display), Inter (body), IBM Plex Mono (technical)
- ESLint + Prettier (with Tailwind class sorting) · Playwright smoke tests
- No database, auth, CMS, or backend. All content lives in typed files under `src/content/`.

## Commands

```bash
npm install          # install dependencies
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run format       # prettier --write .
npm run build        # production build
npm run start        # serve the production build
npm run test:e2e     # Playwright smoke tests (builds must exist: run `npm run build` first)
```

Playwright uses its own Chromium (`npx playwright install chromium` once). To use a preinstalled
browser instead, set `PW_CHROMIUM_PATH=/path/to/chrome`.

## Routes

| Route                                                          | Purpose                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| `/`                                                            | Homepage — hero, formats, recruiting, car, pit ops, roadmap, … |
| `/team`                                                        | Org structure, departments, roster (or "coming soon")          |
| `/racing`                                                      | Series format, racing pillars, race calendar (or TBA state)    |
| `/car`                                                         | Mazda MX-5 ND platform with interactive system hotspots        |
| `/road-to-the-grid`                                            | Milestone timeline + detailed progress                         |
| `/join`                                                        | Interactive role explorer + all open roles                     |
| `/partners`                                                    | Benefits, tiers, partner logos (or founding state), contact    |
| `/journal`                                                     | Paddock Journal with category filter                           |
| `/journal/[slug]`                                              | Article pages                                                  |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon.svg` | SEO / metadata                                                 |

## Editing content

Everything a future student leader needs to update lives in `src/content/`:

| File             | What it controls                                                               |
| ---------------- | ------------------------------------------------------------------------------ |
| `site.ts`        | Name, location, Instagram, **joinUrl, sponsorEmail, sponsorDeckUrl**, nav      |
| `roadmap.ts`     | Road to the Grid milestones and their status (`complete/active/next/upcoming`) |
| `team.ts`        | Departments and **members** (empty = "Team roster coming soon")                |
| `roles.ts`       | Recruitment roles and the interest → role mapping on `/join`                   |
| `disciplines.ts` | Homepage "It takes more than a driver" disciplines                             |
| `car.ts`         | Car systems, descriptions, hotspot positions, and image slots                  |
| `racing.ts`      | Race formats, pillars, `calendarSeason`, **events** (empty = "Coming soon")    |
| `partners.ts`    | Benefits, tiers, **partners** (empty = "Founding partners" state)              |
| `journal.ts`     | Articles (`draft: true` hides an article in production)                        |
| `pit.ts`         | Illustrative pit sequence (labelled as illustrative in the UI)                 |
| `media.ts`       | Photography manifest (see below)                                               |

Empty URLs/emails never produce dead links — each has a designed fallback state.

## Photography / asset manifest

No team photography exists yet, so every image slot renders original, locally generated
placeholder art labelled with the shot it expects (e.g. `[ HERO — MX-5 WHEEL-TO-WHEEL RACING IMAGE ]`).
To replace one, add the file to `public/images/` and set `src` in `src/content/media.ts` (or the
`image` field on a car system / article cover). No component changes are needed.

| Slot (`media.ts` key) | Ideal shot                                            | Recommended size |
| --------------------- | ----------------------------------------------------- | ---------------- |
| `hero`                | Horizontal wheel-to-wheel MX-5 racing shot            | 2400×1400+       |
| `formatSprint`        | MX-5s side by side into a corner                      | 1600×1000+       |
| `formatEndurance`     | Pit stop / driver change                              | 1600×1000+       |
| `formatChampionship`  | Team at the pit wall                                  | 1600×1000+       |
| `disciplines`         | Students working on the car                           | 1600×2000+       |
| `teamHero`            | Pit / garage / team-working photograph                | 2400×1400+       |
| `racingHero`          | MX-5 pack racing                                      | 2400×1400+       |
| `joinHero`            | Students working on car / telemetry                   | 2400×1400+       |
| `partnersHero`        | Race-car detail / helmet / garage                     | 2400×1400+       |
| `roadHero`            | Team-building / preparation photograph                | 2400×1400+       |
| `carProfile`          | Clean side profile of the team MX-5                   | 2800×1100+       |
| `paddockTiles` (×6)   | Square social-style shots (garage, track, data, …)    | 1200×1200+       |
| `car.ts → image` (×6) | Suspension, dash/logger, cage, brakes, tires, cockpit | 1600×1000+       |

Logos: the site uses a temporary text-based **M/R** mark (`src/components/layout/BrandMark.tsx`,
`src/app/icon.svg`). Replace once an approved logo exists. Do not add UW, IMSA, Mazda, or CRS
marks without explicit approval.

## Architecture notes

- **Server components by default.** Client components are limited to: header/mobile menu,
  scroll reveal, discipline explorer, car explorer, role selector, and journal filter.
- **No animation library.** Motion is CSS (keyframes + an IntersectionObserver `Reveal`
  wrapper that toggles attributes without re-rendering). Everything respects
  `prefers-reduced-motion`, and content is visible without JavaScript.
- **Cache Components** is enabled (Next 16 default scaffold). The footer year uses
  `"use cache"` + `cacheLife("days")`; article params are read inside `<Suspense>`.
- **Accessibility:** semantic landmarks, skip link, visible focus, keyboard-operable tabs,
  hotspots and role selector, `aria-live` result regions, status shown by text + shape (never
  colour alone), AA contrast tokens (`--race-red-text`, `--dim-text` for small text).
- **SEO:** per-route metadata via `pageMetadata()`, canonical URLs, Open Graph/Twitter cards,
  generated OG image, sitemap, robots, and Organization JSON-LD with only confirmed facts.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository. Framework preset: **Next.js**
   (build `next build`, output handled automatically). Node.js 20.9+ is required.
3. Environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — the final canonical origin, e.g. `https://example.com`
     (used for canonical URLs, sitemap, robots, and Open Graph). If unset, Vercel's
     production URL is used automatically.
4. Deploy. Every push to the default branch redeploys; pull requests get preview URLs.
5. Optional: add a custom domain under **Settings → Domains**, then update `NEXT_PUBLIC_SITE_URL`.
