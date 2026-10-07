import type { IconName } from "@/types/content";
import { cn } from "@/lib/cn";

const paths: Record<IconName, React.ReactNode> = {
  wrench: <path d="M14.5 3.5a4 4 0 0 0-5 5L3.5 14.5l2 2 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2z" />,
  flag: (
    <>
      <path d="M4 17V3" />
      <path d="M4 3.5h11l-2.5 3.5L15 10.5H4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v14h14" />
      <path d="m6 12 3-4 3 2 4-5" />
    </>
  ),
  helmet: (
    <>
      <path d="M3 12a7 7 0 0 1 14-1v4H8l-5-3z" />
      <path d="M10 11h7" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="6" width="15" height="10" />
      <path d="M7 6V3.5h6V6M2.5 10.5h15" />
    </>
  ),
  camera: (
    <>
      <path d="M2.5 6.5h3l1.5-2h6l1.5 2h3v10h-15z" />
      <circle cx="10" cy="11" r="3" />
    </>
  ),
  compass: (
    <>
      <circle cx="10" cy="10" r="7.5" />
      <path d="m12.8 7.2-1.6 4-4 1.6 1.6-4z" />
    </>
  ),
  car: (
    <>
      <path d="M2 13v-2.5l2-1 2.5-3h6l3 3 2.5.6V13z" />
      <circle cx="5.5" cy="13.5" r="1.5" />
      <circle cx="14.5" cy="13.5" r="1.5" />
    </>
  ),
  campus: (
    <>
      <path d="M2 7.5 10 3l8 4.5" />
      <path d="M4 8v7M8 8v7M12 8v7M16 8v7M2.5 16.5h15" />
    </>
  ),
  screen: (
    <>
      <rect x="2.5" y="3.5" width="15" height="10" />
      <path d="M7 17h6M10 13.5V17" />
    </>
  ),
  shirt: (
    <path d="m7 3-4.5 2.5 1.5 3.5L6 8v9h8V8l2 1 1.5-3.5L13 3c-.5 1.5-1.5 2.2-3 2.2S7.5 4.5 7 3z" />
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      {paths[name]}
    </svg>
  );
}
