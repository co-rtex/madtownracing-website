import { cn } from "@/lib/cn";

/** Temporary text-based M/R mark — replace once an approved logo exists. */
export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="font-display text-[1.65rem] leading-none font-black tracking-tight italic"
      >
        M<span className="text-red">/</span>R
      </span>
      {!compact && (
        <span className="border-l border-line-strong pl-3 font-display text-[0.8rem] leading-[0.95] font-bold tracking-[0.18em] uppercase">
          MadTown
          <br />
          <span className="text-steel">Racing</span>
        </span>
      )}
    </span>
  );
}
