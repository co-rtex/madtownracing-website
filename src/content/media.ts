import type { MediaAsset } from "@/types/content";
import { clubMedia } from "@/content/clubMedia";

/**
 * Photography manifest. Drop approved images into /public/images and set
 * `src` — components pick them up automatically. Until then each slot
 * renders a designed placeholder that names the shot it is waiting for.
 */
export const media = {
  hero: {
    alt: "MadTown Racing Mazda MX-5 racing wheel-to-wheel on track",
    placeholder: "Hero — MX-5 wheel-to-wheel racing image",
    variant: "car",
    recommended: "Horizontal, 2400×1400 or larger",
  },
  formatSprint: {
    alt: "Mazda MX-5s racing side by side into a corner",
    placeholder: "Sprint — MX-5s side by side",
    variant: "track",
    recommended: "1600×1000+",
  },
  formatEndurance: {
    alt: "Pit crew servicing a race car during a driver change",
    placeholder: "Endurance — pit stop / driver change",
    variant: "garage",
    recommended: "1600×1000+",
  },
  formatChampionship: {
    alt: "Race team gathered at the pit wall",
    placeholder: "Championship — team at pit wall",
    variant: "team",
    recommended: "1600×1000+",
  },
  disciplines: {
    alt: "Students working on the team car in the garage",
    placeholder: "Team — students working on the car",
    variant: "garage",
    recommended: "1600×2000+ (portrait friendly)",
  },
  teamHero: {
    alt: "MadTown Racing team members in the garage",
    placeholder: "Team — pit / garage / team-working photograph",
    variant: "team",
    recommended: "2400×1400+",
  },
  racingHero: {
    alt: "Mazda MX-5s racing in a pack",
    placeholder: "Racing — MX-5 pack racing",
    variant: "track",
    recommended: "2400×1400+",
  },
  joinHero: {
    alt: "Students reviewing telemetry beside the car",
    placeholder: "Join — students working on car / telemetry",
    variant: "data",
    recommended: "2400×1400+",
  },
  partnersHero: {
    alt: "Driver helmet and race car detail in the garage",
    placeholder: "Partners — race-car detail / helmet / garage",
    variant: "detail",
    recommended: "2400×1400+",
  },
  roadHero: {
    alt: "MadTown Racing members preparing the team",
    placeholder: "Road to the Grid — team-building / preparation",
    variant: "team",
    recommended: "2400×1400+",
  },
  carProfile: {
    alt: "Side profile of the MadTown Racing Mazda MX-5 ND",
    placeholder: "Car — clean side profile of team MX-5",
    variant: "car",
    recommended: "Transparent PNG or clean backdrop, 2800×1100+",
  },
  pitStop: {
    alt: "Crew performing an endurance pit stop",
    placeholder: "Pit stop — crew in action",
    variant: "garage",
    recommended: "2000×1200+",
  },
} satisfies Record<string, MediaAsset>;

/** Six tiles for the "From the Paddock" Instagram grid. */
export const paddockTiles: MediaAsset[] = [
  {
    src: clubMedia.mtrIntroPost,
    alt: "MadTown Racing introductory recruiting graphic",
    placeholder: "Paddock 01 — MadTown Racing intro post",
    variant: "garage",
  },
  { alt: "", placeholder: "Paddock 02 — on track", variant: "track" },
  { alt: "", placeholder: "Paddock 03 — data review", variant: "data" },
  { alt: "", placeholder: "Paddock 04 — car detail", variant: "detail" },
  { alt: "", placeholder: "Paddock 05 — team", variant: "team" },
  { alt: "", placeholder: "Paddock 06 — the car", variant: "car" },
];
