import type { CarSystem } from "@/types/content";
import { CarProfile } from "@/components/car/CarProfile";
import { cn } from "@/lib/cn";

/**
 * Side-profile car with engineering-style callouts.
 * - md+: labelled callout lines above / below the car.
 * - small screens: numbered hotspots only (pair with a list of systems).
 * Pass `onSelect` (from a client component) to make hotspots interactive.
 */
export function CarDiagram({
  id,
  systems,
  selectedId,
  onSelect,
  className,
}: {
  id: string;
  systems: CarSystem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}) {
  // Alternate label heights left-to-right so neighbouring labels never collide.
  const top = systems.filter((s) => s.callout === "top").sort((a, b) => a.hotspot.x - b.hotspot.x);
  return (
    <div className={cn("relative pt-4 pb-4 lg:pt-40 lg:pb-32", className)}>
      {/* Car height = 32% of width (viewBox 1000×320). */}
      <div className="[container-type:inline-size] relative [--car-h:32cqw]">
        <CarProfile id={id} />
        {systems.map((system) => {
          const isTop = system.callout === "top";
          const level = isTop ? top.indexOf(system) % 2 : 0;
          const selected = selectedId === system.id;
          const above = `${system.hotspot.y / 100} * var(--car-h)`;
          const below = `${(100 - system.hotspot.y) / 100} * var(--car-h)`;
          const labelGap = isTop ? (level ? 3 : 6.5) : 3.5;
          const content = (
            <>
              <span
                className={cn(
                  "absolute top-1/2 left-1/2 z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border font-mono text-[0.7rem] font-medium transition-colors lg:size-3",
                  "group-focus-visible:ring-2 group-focus-visible:ring-warm group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-track",
                  selected
                    ? "border-red bg-red text-warm"
                    : "border-warm/70 bg-track/85 text-warm group-hover:border-red lg:border-red lg:bg-red",
                )}
              >
                <span aria-hidden="true" className="lg:sr-only">
                  {system.number}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute left-1/2 hidden w-px lg:block",
                  selected ? "bg-red" : "bg-warm/30",
                )}
                style={
                  isTop
                    ? {
                        bottom: 0,
                        height: `calc(${above} + ${labelGap + 0.6}rem)`,
                      }
                    : {
                        top: 0,
                        height: `calc(${below} + ${labelGap + 0.6}rem)`,
                      }
                }
              />
              <span
                className="pointer-events-none absolute left-[calc(50%+0.625rem)] hidden w-max max-w-[12rem] lg:block"
                style={
                  isTop
                    ? { bottom: `calc(50% + ${above} + ${labelGap}rem)` }
                    : { top: `calc(50% + ${below} + ${labelGap}rem)` }
                }
              >
                <span className="flex items-baseline gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase">
                  <span className="text-red-text">{system.number}</span>
                  <span
                    className={cn(
                      "font-medium transition-colors",
                      selected ? "text-warm" : "text-muted group-hover:text-warm",
                    )}
                  >
                    {system.name}
                  </span>
                </span>
                <span className="mt-1 block pl-[1.6rem] font-mono text-[0.66rem] text-steel">
                  {system.short}
                </span>
              </span>
            </>
          );
          const position = {
            left: `${system.hotspot.x}%`,
            top: `${system.hotspot.y}%`,
          };
          return onSelect ? (
            <button
              key={system.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(system.id)}
              className="group absolute size-9 -translate-x-1/2 -translate-y-1/2 outline-none lg:size-6"
              style={position}
            >
              <span className="sr-only lg:hidden">
                {system.number} {system.name}
              </span>
              {content}
            </button>
          ) : (
            <div
              key={system.id}
              className="group absolute size-9 -translate-x-1/2 -translate-y-1/2 lg:size-6"
              style={position}
            >
              <span className="sr-only">
                {system.number} {system.name} — {system.short}
              </span>
              <span aria-hidden="true">{content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
