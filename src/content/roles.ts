import type { Role, RoleInterest } from "@/types/content";

export const roles: Role[] = [
  {
    id: "race-engineer",
    name: "Race Engineering",
    department: "Technical",
    description:
      "Analyze data, improve performance, and help turn driver feedback into setup and strategy decisions.",
    typicalWork: [
      "Analyze telemetry",
      "Compare driver laps",
      "Study setup changes",
      "Support race strategy",
    ],
    experience: [
      "No prior motorsport experience required.",
      "Relevant engineering knowledge is helpful but not mandatory.",
    ],
  },
  {
    id: "data-telemetry",
    name: "Data / Telemetry",
    department: "Technical",
    description:
      "Own the logging setup, keep data clean and organized, and build the views the team uses to understand every session.",
    typicalWork: [
      "Configure and download the data logger",
      "Build lap and sector comparisons",
      "Maintain the session data archive",
      "Present findings to drivers and engineers",
    ],
    experience: [
      "Curiosity and attention to detail matter most.",
      "Spreadsheet, Python, or MATLAB experience is a plus.",
    ],
  },
  {
    id: "software",
    name: "Software",
    department: "Technical",
    description:
      "Write the tools that make the team faster — analysis scripts, dashboards, timing tools, and internal systems.",
    typicalWork: [
      "Automate telemetry processing",
      "Build internal dashboards",
      "Support simulation and video workflows",
      "Maintain team tools and documentation",
    ],
    experience: ["Any programming background is useful.", "No automotive knowledge required."],
  },
  {
    id: "mechanic",
    name: "Mechanic / Trackside",
    department: "Operations",
    description:
      "Prepare and maintain the car, execute pit stops, and keep everything safe and race-ready on event weekends.",
    typicalWork: [
      "Car preparation and maintenance",
      "Pit stop practice and execution",
      "Pre- and post-session checks",
      "Garage and equipment organization",
    ],
    experience: [
      "Hands-on experience helps, but we will teach the procedures.",
      "Reliability and calm under pressure matter most.",
    ],
  },
  {
    id: "driver",
    name: "Driver",
    department: "Operations",
    description:
      "Race wheel-to-wheel, give precise feedback, and work with engineers to get faster as a team — not just as an individual.",
    typicalWork: [
      "Simulator and data review sessions",
      "Track sessions and racing",
      "Debriefs with engineering",
      "Licensing and fitness preparation",
    ],
    experience: [
      "Driver selection and licensing requirements will be shared by the team.",
      "Karting, autocross, or sim racing experience is helpful.",
    ],
  },
  {
    id: "operations",
    name: "Operations",
    department: "Operations",
    description:
      "Plan race weekends, manage logistics and schedules, and make sure the team arrives prepared.",
    typicalWork: [
      "Event planning and travel logistics",
      "Inventory and equipment tracking",
      "Safety and compliance checklists",
      "Team scheduling",
    ],
    experience: ["Organization and follow-through matter more than background."],
  },
  {
    id: "sponsorship",
    name: "Sponsorship",
    department: "Business",
    description:
      "Build relationships with partners, craft proposals, and make sure partners get real value from supporting the team.",
    typicalWork: [
      "Identify and contact prospective partners",
      "Prepare partnership proposals",
      "Manage partner communication",
      "Report on partner activation",
    ],
    experience: ["Business, communication, or sales interest is helpful."],
  },
  {
    id: "finance",
    name: "Finance",
    department: "Business",
    description:
      "Build the budget, track spending, and help the team make smart decisions with limited resources.",
    typicalWork: [
      "Budget planning",
      "Expense tracking",
      "Purchasing support",
      "Financial reporting",
    ],
    experience: ["Accounting or finance coursework is helpful but not required."],
  },
  {
    id: "marketing",
    name: "Marketing",
    department: "Business",
    description:
      "Grow the team's audience on campus and beyond, and shape how MadTown Racing is seen.",
    typicalWork: ["Campaign planning", "Campus events", "Brand consistency", "Audience growth"],
    experience: ["Marketing interest and creativity — no experience required."],
  },
  {
    id: "social",
    name: "Social Media",
    department: "Business",
    description:
      "Run the team's channels and turn everyday progress into content people want to follow.",
    typicalWork: [
      "Content calendar",
      "Posting and community",
      "Race-weekend coverage",
      "Analytics",
    ],
    experience: ["Familiarity with Instagram, TikTok, or similar platforms."],
  },
  {
    id: "photography",
    name: "Photography",
    department: "Business",
    description: "Capture the team, the car, and race weekends with a professional motorsport eye.",
    typicalWork: ["Garage and team portraits", "Trackside photography", "Editing and archiving"],
    experience: ["Bring your own camera if you have one; we value your eye most."],
  },
  {
    id: "videography",
    name: "Videography",
    department: "Business",
    description: "Film and edit the story of building a race team from zero.",
    typicalWork: ["Short-form video", "Behind-the-scenes series", "On-board and trackside footage"],
    experience: ["Editing experience is a plus."],
  },
  {
    id: "design",
    name: "Graphic Design",
    department: "Business",
    description:
      "Design the team's visual identity across livery concepts, apparel, social, and partner materials.",
    typicalWork: [
      "Social graphics",
      "Partner deck design",
      "Apparel and merchandise",
      "Livery concepts",
    ],
    experience: ["A portfolio helps but isn't required."],
  },
];

export const roleInterests: RoleInterest[] = [
  {
    id: "faster",
    label: "Making the car faster",
    icon: "wrench",
    roles: ["race-engineer", "data-telemetry", "mechanic"],
  },
  {
    id: "trackside",
    label: "Working trackside",
    icon: "flag",
    roles: ["mechanic", "operations", "race-engineer"],
  },
  {
    id: "data",
    label: "Data & software",
    icon: "chart",
    roles: ["data-telemetry", "software", "race-engineer"],
  },
  {
    id: "driving",
    label: "Driving",
    icon: "helmet",
    roles: ["driver", "data-telemetry"],
  },
  {
    id: "business",
    label: "Business",
    icon: "briefcase",
    roles: ["sponsorship", "finance", "marketing", "operations"],
  },
  {
    id: "media",
    label: "Photo / video / design",
    icon: "camera",
    roles: ["photography", "videography", "design", "social"],
  },
  {
    id: "unsure",
    label: "I don't know yet",
    icon: "compass",
    roles: ["operations", "mechanic", "data-telemetry", "marketing"],
  },
];
