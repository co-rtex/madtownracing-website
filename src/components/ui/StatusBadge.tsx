import type { MilestoneStatus } from "@/types/content";
import { statusLabel } from "@/content/roadmap";
import { cn } from "@/lib/cn";

/** Status is always communicated by text and shape, never colour alone. */
export function StatusBadge({
  status,
  className,
}: {
  status: MilestoneStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.14em] uppercase",
        status === "complete" && "text-success",
        status === "active" && "text-red-text",
        status === "next" && "text-warm",
        status === "upcoming" && "text-steel",
        className,
      )}
    >
      <StatusGlyph status={status} />
      {statusLabel[status]}
    </span>
  );
}

export function StatusGlyph({ status }: { status: MilestoneStatus }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" className="size-2.5 shrink-0">
      {status === "complete" && (
        <path d="M1.5 5.2 4 7.5 8.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      )}
      {status === "active" && (
        <circle cx="5" cy="5" r="4" fill="currentColor" className="anim-pulse" />
      )}
      {status === "next" && (
        <circle cx="5" cy="5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      )}
      {status === "upcoming" && (
        <rect x="1.5" y="4.25" width="7" height="1.5" fill="currentColor" />
      )}
    </svg>
  );
}
