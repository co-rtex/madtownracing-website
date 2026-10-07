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
 * Competition season shown on the race calendar, e.g. "2027".
 * Leave undefined until the team has confirmed its first season — the
 * calendar then reads simply "Race calendar". Never enter a guessed year.
 */
export const calendarSeason: string | undefined = undefined;

/** "2027 race calendar" when a season is confirmed, otherwise "Race calendar". */
export function calendarTitle(season: string | null | undefined = calendarSeason): string {
  const year = season?.trim();
  return year ? `${year} race calendar` : "Race calendar";
}

/**
 * Confirmed MadTown Racing entries only. While empty, /racing shows the
 * "calendar coming soon" state — no placeholder circuits or rounds.
 * Add circuit maps as SVGs under /public/tracks and reference them via `mapSvg`.
 */
export const events: RaceEvent[] = [];
