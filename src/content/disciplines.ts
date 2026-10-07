import type { Discipline } from "@/types/content";

/** Homepage "It takes more than a driver" disciplines. */
export const disciplines: Discipline[] = [
  {
    id: "race-engineering",
    name: "Race Engineering",
    summary: "Turn data and driver feedback into a faster, better-balanced car.",
    work: ["Vehicle setup", "Telemetry", "Tire data", "Strategy"],
  },
  {
    id: "trackside",
    name: "Trackside Operations",
    summary: "Run the pit box and keep the car on track, safely and on time.",
    work: ["Pit stops", "Fuel", "Communications", "Safety", "Logistics"],
  },
  {
    id: "driver",
    name: "Driver Program",
    summary: "Develop drivers who race cleanly, give useful feedback, and learn from data.",
    work: ["Racecraft", "Simulation", "Data review", "Feedback", "Licensing"],
  },
  {
    id: "data",
    name: "Data & Technology",
    summary: "Build the tools that turn every lap into something the team can learn from.",
    work: ["Telemetry", "Analytics", "Software", "Video", "Simulation"],
  },
  {
    id: "business",
    name: "Business",
    summary: "Fund the program and run the organization like a real race team.",
    work: ["Sponsorship", "Finance", "Partnerships", "Operations"],
  },
  {
    id: "media",
    name: "Media",
    summary: "Tell the story of a race team being built from zero.",
    work: ["Photography", "Video", "Brand", "Social", "Storytelling"],
  },
];
