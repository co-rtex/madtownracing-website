import { cn } from "@/lib/cn";

/** Row of monospace metadata separated by thin vertical rules. */
export function TechnicalMeta({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-stretch border-l-2 border-red font-mono text-[0.7rem] tracking-[0.14em] text-muted uppercase sm:text-xs",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="border-r border-line-strong px-4 py-2 last:border-r-0">
          {item}
        </li>
      ))}
    </ul>
  );
}
