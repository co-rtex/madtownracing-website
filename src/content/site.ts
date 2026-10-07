import type { NavItem } from "@/types/content";

/**
 * Single source of truth for recurring team information.
 * Empty strings mean "not available yet" — the UI shows a designed
 * fallback state instead of a broken link. See CONTENT_TODO.md.
 */
export const siteConfig = {
  name: "MadTown Racing",
  shortName: "M/R",
  location: "Madison, Wisconsin",
  locationShort: "Madison, WI",
  description:
    "MadTown Racing is a student-operated collegiate motorsports organization in Madison preparing for wheel-to-wheel competition in the Collegiate Racing Series.",
  tagline: "Student-operated collegiate motorsports organization in Madison, Wisconsin.",
  instagram: "https://www.instagram.com/madtownracing/",
  instagramHandle: "@madtownracing",
  /** External application / interest form (e.g. Google Form). */
  joinUrl: "",
  /**
   * Public contact email for partnership enquiries. This is the only value to
   * change: while empty, /partners falls back to Instagram DMs.
   */
  sponsorEmail: "",
  /** Link to a hosted partnership deck PDF. */
  sponsorDeckUrl: "",
  platform: {
    series: "Collegiate Racing Series",
    class: "CRS A-Series",
    car: "Mazda MX-5 ND",
  },
} as const;

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is final. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const mainNav: NavItem[] = [
  { label: "The Team", href: "/team" },
  { label: "Racing", href: "/racing" },
  { label: "The Car", href: "/car" },
  { label: "Road to the Grid", href: "/road-to-the-grid" },
  { label: "Partners", href: "/partners" },
  { label: "Journal", href: "/journal" },
];

export const footerNav: NavItem[] = [
  { label: "Team", href: "/team" },
  { label: "Racing", href: "/racing" },
  { label: "The Car", href: "/car" },
  { label: "Road to the Grid", href: "/road-to-the-grid" },
  { label: "Join", href: "/join" },
  { label: "Partners", href: "/partners" },
  { label: "Journal", href: "/journal" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagram,
    handle: siteConfig.instagramHandle,
  },
] as const;
