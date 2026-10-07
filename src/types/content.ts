export type NavItem = {
  label: string;
  href: string;
};

/** A photograph slot. Leave `src` undefined until a real, approved image exists. */
export type MediaAsset = {
  /** Path under /public, e.g. "/images/hero.jpg". */
  src?: string;
  alt: string;
  /** Shown inside the placeholder so editors know what belongs here. */
  placeholder: string;
  /** Visual treatment used while the photograph is missing. */
  variant: PlaceholderVariant;
  recommended?: string;
};

export type PlaceholderVariant = "track" | "garage" | "data" | "car" | "team" | "detail";

export type MilestoneStatus = "complete" | "active" | "next" | "upcoming";

export type Milestone = {
  number: string;
  title: string;
  status: MilestoneStatus;
  summary: string;
  /** Only set once a real date is known. Never estimate. */
  date?: string;
  notes?: string[];
  /** Slugs of related journal articles. */
  articles?: string[];
  gallery?: MediaAsset[];
};

export type Discipline = {
  id: string;
  name: string;
  summary: string;
  work: string[];
};

export type RoleInterest = {
  id: string;
  label: string;
  icon: IconName;
  roles: string[];
};

export type Role = {
  id: string;
  name: string;
  department: "Technical" | "Operations" | "Business";
  description: string;
  typicalWork: string[];
  experience: string[];
};

export type Department = {
  id: string;
  name: string;
  summary: string;
  functions: string[];
};

export type Member = {
  name: string;
  role: string;
  department: Department["id"];
  major?: string;
  graduationYear?: number;
  focus?: string;
  favoriteCircuit?: string;
  linkedin?: string;
  photo?: string;
};

export type CarSystem = {
  number: string;
  id: string;
  name: string;
  short: string;
  description: string;
  bullets?: string[];
  image?: MediaAsset;
  /** Hotspot position on the side-profile drawing, in percent. */
  hotspot: { x: number; y: number };
  /** Desktop callout placement relative to the car. */
  callout: "top" | "bottom";
};

export type RaceEvent = {
  round: string;
  event: string;
  circuit: string;
  dates?: string;
  status: "confirmed" | "tentative" | "complete";
  mapSvg?: string;
  result?: string;
};

export type PartnerBenefit = {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  items: string[];
};

export type PartnerTier = {
  name: string;
  summary: string;
};

export type Partner = {
  name: string;
  tier: PartnerTier["name"];
  logo: string;
  url?: string;
};

export type ArticleCategory = "Team" | "Technical" | "Data" | "Build" | "Partners" | "Race";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  /** ISO date. Leave undefined rather than inventing one. */
  date?: string;
  author?: string;
  cover: MediaAsset;
  body: { heading?: string; paragraphs: string[] }[];
  /** Drafts never render in production builds. */
  draft?: boolean;
};

export type IconName =
  | "wrench"
  | "flag"
  | "chart"
  | "helmet"
  | "briefcase"
  | "camera"
  | "compass"
  | "car"
  | "campus"
  | "screen"
  | "shirt";
