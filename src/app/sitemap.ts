import type { MetadataRoute } from "next";
import { articles } from "@/content/journal";
import { getSiteUrl } from "@/content/site";

const routes = [
  "",
  "/team",
  "/racing",
  "/car",
  "/road-to-the-grid",
  "/join",
  "/partners",
  "/journal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${base}/journal/${article.slug}`,
      ...(article.date && { lastModified: article.date }),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
