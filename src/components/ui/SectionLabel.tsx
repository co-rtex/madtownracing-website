import { cn } from "@/lib/cn";

/** Small monospace label: "01 — The Platform". */
export function SectionLabel({
  number,
  children,
  className,
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-steel", className)}>
      <span aria-hidden="true" className="h-px w-6 bg-red" />
      {number && <span className="text-red-text">{number}</span>}
      <span>{children}</span>
    </p>
  );
}
