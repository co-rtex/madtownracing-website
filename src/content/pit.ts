/**
 * Illustrative pit sequence for the homepage. These timings are UI
 * illustration only — not MadTown Racing performance data.
 */
export const pitSequence = [
  { time: "00:00", seconds: 0, label: "Car stops" },
  { time: "00:12", seconds: 12, label: "Driver out" },
  { time: "00:29", seconds: 29, label: "Service" },
  { time: "02:43", seconds: 163, label: "Driver in" },
  { time: "03:10", seconds: 190, label: "Belts" },
  { time: "03:27", seconds: 207, label: "Radio check" },
  { time: "04:00", seconds: 240, label: "Release" },
] as const;

export const pitCrew = [
  { number: "01", role: "Service" },
  { number: "02", role: "Service" },
  { number: "03", role: "Fire / Safety" },
  { number: "04", role: "Comms / Timing" },
] as const;
