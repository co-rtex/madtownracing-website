import type { Partner, PartnerBenefit, PartnerTier } from "@/types/content";

/** Benefit categories. Specific deliverables are agreed per partner. */
export const partnerBenefits: PartnerBenefit[] = [
  {
    id: "car",
    name: "Car",
    icon: "car",
    description:
      "Potential brand visibility on team assets and vehicle placements where permitted.",
    items: ["Livery placement", "Team assets"],
  },
  {
    id: "campus",
    name: "Campus",
    icon: "campus",
    description: "Student engagement, recruiting, and team events.",
    items: ["Recruiting access", "Student engagement", "Team events"],
  },
  {
    id: "digital",
    name: "Digital",
    icon: "screen",
    description: "Website, social media, race updates, and content.",
    items: ["Website", "Social content", "Race updates"],
  },
  {
    id: "team",
    name: "Team",
    icon: "shirt",
    description: "Apparel, equipment, events, and team experiences where applicable.",
    items: ["Apparel", "Equipment", "Team experiences"],
  },
];

export const partnerTiers: PartnerTier[] = [
  {
    name: "Founding Partner",
    summary:
      "Helps put the team on the grid for the first time. The deepest, most visible relationship.",
  },
  {
    name: "Performance Partner",
    summary: "Major support for the race program with significant brand presence.",
  },
  {
    name: "Technical Partner",
    summary: "Products, tools, or technical expertise that make the car and team better.",
  },
  {
    name: "Supporting Partner",
    summary: "Direct support for the program and the students who run it.",
  },
  {
    name: "In-Kind Partner",
    summary: "Equipment, services, or resources in place of financial support.",
  },
];

/** Confirmed partners only, with approved logo files in /public/brand/partners. */
export const partners: Partner[] = [];
