import type { Department, Member } from "@/types/content";

export const leadershipRole = {
  name: "Team Principal",
  summary: "Sets direction, owns the program, and connects every department.",
};

export const departments: Department[] = [
  {
    id: "technical",
    name: "Technical",
    summary: "Makes the car faster and turns data into decisions.",
    functions: ["Race Engineering", "Data & Telemetry", "Vehicle Setup", "Software"],
  },
  {
    id: "operations",
    name: "Operations",
    summary: "Runs the race weekend, from the driver seat to the pit wall.",
    functions: ["Drivers", "Pit Crew", "Logistics", "Safety"],
  },
  {
    id: "business",
    name: "Business",
    summary: "Funds the program, builds partnerships, and tells the story.",
    functions: ["Sponsorships", "Finance", "Marketing", "Media"],
  },
];

/**
 * Real, consenting team members only. While this list is empty the team
 * page renders a "roster coming soon" state instead of placeholder people.
 *
 * Example entry (do not ship placeholder identities):
 * {
 *   name: "First Last",
 *   role: "Team Principal",
 *   department: "technical",
 *   major: "Mechanical Engineering",
 *   graduationYear: 2028,
 *   focus: "Vehicle dynamics",
 *   favoriteCircuit: "Road America",
 *   linkedin: "https://www.linkedin.com/in/…",
 *   photo: "/images/team/first-last.jpg",
 * }
 */
export const members: Member[] = [];
