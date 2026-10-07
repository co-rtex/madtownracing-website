"use client";

import { useState } from "react";
import type { CarSystem } from "@/types/content";
import { CarDiagram } from "@/components/car/CarDiagram";
import { cn } from "@/lib/cn";

/** Interactive car diagram: hotspots and the system list stay in sync. */
export function CarExplorer({ systems }: { systems: CarSystem[] }) {
  const [selectedId, setSelectedId] = useState(systems[0]!.id);
  const selected = systems.find((s) => s.id === selectedId) ?? systems[0]!;

  return (
    <div>
      <CarDiagram
        id="car-explorer"
        systems={systems}
        selectedId={selectedId}
        onSelect={setSelectedId}
        className="mx-auto max-w-[1240px]"
      />

      <div className="mt-6 grid border border-line-strong lg:mt-0 lg:grid-cols-12">
        <ul className="grid grid-cols-2 border-b border-line-strong sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:border-r lg:border-b-0">
          {systems.map((system) => {
            const active = system.id === selectedId;
            return (
              <li key={system.id} className="border-line not-last:border-b max-lg:border-r">
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedId(system.id)}
                  className={cn(
                    "relative flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors md:px-6",
                    active ? "bg-pit text-warm" : "text-steel hover:bg-pit/60 hover:text-muted",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 left-0 w-0.5 bg-red transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className={cn("font-mono text-xs", active ? "text-red-text" : "text-dim")}>
                    {system.number}
                  </span>
                  <span className="font-display text-lg font-bold tracking-wide uppercase md:text-xl">
                    {system.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div aria-live="polite" className="p-6 md:p-10 lg:col-span-7">
          <div key={selected.id} className="anim-rise">
            <p className="font-mono text-sm text-red-text">
              {selected.number}{" "}
              <span className="text-dim">/ {String(systems.length).padStart(2, "0")}</span>
            </p>
            <h3 className="display mt-2 text-[clamp(2.4rem,4vw,3.75rem)]">{selected.name}</h3>
            <p className="eyebrow mt-2 text-steel">{selected.short}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{selected.description}</p>
            {selected.bullets && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {selected.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 border-l border-red pl-3 font-mono text-xs tracking-wider text-muted uppercase"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
