import { cn } from "@/lib/cn";

export function Arrow({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "up-right" | "down";
}) {
  const rotate = { right: "", "up-right": "-rotate-45", down: "rotate-90" }[direction];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-3.5 shrink-0", rotate, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" strokeLinecap="square" />
    </svg>
  );
}
