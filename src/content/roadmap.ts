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
      "Build an interdisciplinary founding team, define leadership, and establish the systems needed to operate as a serious student race program.",
    notes: [
      "Recruiting students across engineering, data, operations, business, media, and driving.",
      "Defining leadership roles, working groups, and team procedures.",
      "Building the club's public presence and internal communication structure.",
    ],
    articles: ["why-we-are-building-madtown-racing"],
  },
  {
    number: "02",
    title: "Establish the Program",
    status: "active",
    summary:
      "Build the operational foundation around the team: university processes, CRS coordination, finances, communications, and partner outreach.",
    notes: [
      "Organizing the club's financial and operational structure.",
      "Preparing partnership materials and beginning sponsor outreach.",
      "Coordinating next steps with the Collegiate Racing Series.",
    ],
  },
  {
    number: "03",
    title: "Fund & Acquire the Car",
    status: "next",
    summary:
      "Secure the resources needed for the program and acquire the Mazda MX-5 ND platform used for Collegiate Racing Series competition.",
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
