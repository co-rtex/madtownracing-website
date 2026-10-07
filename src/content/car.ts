import type { CarSystem } from "@/types/content";

export const carIntro =
  "A proven platform built for close competition — and a focus on what matters: driver development, engineering, and team execution.";

/**
 * Car systems shown on /car and previewed on the homepage.
 * Keep descriptions within what the series rules and the team have confirmed.
 */
export const carSystems: CarSystem[] = [
  {
    number: "01",
    id: "suspension",
    name: "Suspension",
    short: "Setup within series rules",
    description:
      "Setup is where teams find time. Alignment, ride height, and damping choices within the series rules shape how the car balances through every corner.",
    bullets: ["Alignment and ride height", "Damping and balance", "Setup documentation"],
    hotspot: { x: 25, y: 47 },
    callout: "top",
    image: {
      alt: "Race car suspension detail",
      placeholder: "Car — suspension detail",
      variant: "detail",
    },
  },
  {
    number: "02",
    id: "data",
    name: "Data & Telemetry",
    short: "Logging every lap",
    description:
      "Data logging lets the team compare laps, drivers, and setups objectively. It is the shared language between drivers and engineers.",
    bullets: ["Lap and sector comparison", "Driver coaching", "Setup validation"],
    hotspot: { x: 47, y: 34 },
    callout: "top",
    image: {
      alt: "Data logger display in the cockpit",
      placeholder: "Car — data logger / dash",
      variant: "data",
    },
  },
  {
    number: "03",
    id: "safety",
    name: "Safety",
    short: "Built to series rules",
    description:
      "Roll protection, fire suppression, and driver restraint systems prepared and inspected to series and sanctioning-body requirements. Nothing matters more.",
    bullets: ["Roll structure", "Fire suppression", "Harness and seat", "Electrical cutoff"],
    hotspot: { x: 64, y: 22 },
    callout: "top",
    image: {
      alt: "Roll cage and racing seat inside the car",
      placeholder: "Car — cage, seat, harness",
      variant: "garage",
    },
  },
  {
    number: "04",
    id: "brakes",
    name: "Brakes",
    short: "Consistency under load",
    description:
      "Wheel-to-wheel racing is won on the brakes. The team focuses on consistent performance across a stint and careful component management.",
    bullets: ["Pad and fluid management", "Cooling and wear tracking"],
    hotspot: { x: 77, y: 67 },
    callout: "bottom",
    image: {
      alt: "Brake disc and caliper detail",
      placeholder: "Car — brake detail",
      variant: "detail",
    },
  },
  {
    number: "05",
    id: "tires",
    name: "Wheels & Tires",
    short: "The only contact patch",
    description:
      "Tire pressures, temperatures, and wear tell the story of every stint. Managing them well is a team discipline, not just a driver one.",
    bullets: ["Pressure and temperature logging", "Wear tracking", "Set management"],
    hotspot: { x: 30, y: 84 },
    callout: "bottom",
    image: {
      alt: "Race tires on the team car",
      placeholder: "Car — wheels and tires",
      variant: "track",
    },
  },
  {
    number: "06",
    id: "driver-environment",
    name: "Driver Environment",
    short: "Seat, controls, comms",
    description:
      "A driver who is comfortable, secure, and connected to the pit wall can focus on racing. Seating, controls, and radio setup support multiple drivers in endurance events.",
    bullets: ["Seat and restraint fit", "Radio communication", "Driver-change procedures"],
    hotspot: { x: 58, y: 54 },
    callout: "bottom",
    image: {
      alt: "Driver seated in the car with radio and controls",
      placeholder: "Car — driver environment",
      variant: "car",
    },
  },
];
