import type { Milestone, MilestoneStatus } from "@/types/content";

/**
 * Road to the Grid — the team's real progress. Update `status` here and
 * every timeline on the site follows. Never add a date that hasn't happened.
 */
export const milestones: Milestone[] = [
  {
    number: "01",
    title: "Form the Team",
    status: "active",
    summary:
      "Recruit founding members across engineering, operations, business, and media, and establish how the organization runs.",
    notes: [
      "Recruiting founding members from every discipline.",
      "Defining leadership roles and department structure.",
    ],
    articles: ["why-we-are-building-madtown-racing"],
  },
  {
    number: "02",
    title: "Secure Funding",
    status: "active",
    summary:
      "Build relationships with founding partners and assemble the budget needed to run a competitive race program.",
    notes: [
      "Preparing partnership materials.",
      "Opening conversations with prospective founding partners.",
    ],
  },
  {
    number: "03",
    title: "Acquire the Car",
    status: "next",
    summary:
      "Source and prepare a Mazda MX-5 ND that meets the Collegiate Racing Series platform requirements.",
  },
  {
    number: "04",
    title: "License Drivers",
    status: "upcoming",
    summary:
      "Develop student drivers and complete the licensing process required for wheel-to-wheel competition.",
  },
  {
    number: "05",
    title: "Test & Prep",
    status: "upcoming",
    summary:
      "Shake down the car, rehearse pit procedures, build data workflows, and prepare the team for race weekends.",
  },
  {
    number: "06",
    title: "Go Racing",
    status: "upcoming",
    summary:
      "Take the green flag as a student-operated race program in the Collegiate Racing Series.",
  },
];

export const statusLabel: Record<MilestoneStatus, string> = {
  complete: "Complete",
  active: "In Progress",
  next: "Next",
  upcoming: "Upcoming",
};
