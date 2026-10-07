import type { RaceEvent } from "@/types/content";

export const raceFormats = [
  {
    number: "01",
    name: "Sprint",
    lines: ["Wheel-to-wheel racing.", "No pit strategy.", "Every position matters."],
  },
  {
    number: "02",
    name: "Endurance",
    lines: ["Driver changes.", "Fuel.", "Pit strategy.", "Team execution."],
  },
  {
    number: "03",
    name: "Championship",
    lines: ["Compete as a complete student-operated race program."],
  },
] as const;

export const racingPillars = [
  {
    title: "Sprint & Endurance",
    body: "Short, intense wheel-to-wheel races and longer events where driver changes and pit work decide the result.",
  },
  {
    title: "Race Operations",
    body: "Timing, communications, pit procedures, and logistics — run by students on every race weekend.",
  },
  {
    title: "Tracks",
    body: "Real road courses with real consequences. Every circuit teaches the team something new.",
  },
  {
    title: "Driver & Team Development",
    body: "Drivers, engineers, and crew learn together through data, debriefs, and repetition.",
  },
] as const;

/**
 * Confirmed MadTown Racing entries only. While empty, /racing shows the
 * "schedule to be announced" state. Add `mapSvg` paths under /public/tracks.
 */
export const events: RaceEvent[] = [];
