"use client";

import { useState } from "react";
import type { Discipline, MediaAsset } from "@/types/content";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { cn } from "@/lib/cn";

/**
 * Desktop: image stage + selectable discipline tabs.
 * Mobile/tablet: native accordions (no JS required to read content).
 */
export function DisciplineExplorer({
  disciplines,
  image,
}: {
  disciplines: Discipline[];
  image: MediaAsset;
}) {
  const [selected, setSelected] = useState(0);
  const current = disciplines[selected]!;

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = disciplines.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = selected === last ? 0 : selected + 1;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = selected === 0 ? last : selected - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`discipline-tab-${disciplines[next]!.id}`)?.focus();
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden min-h-[560px] grid-cols-12 border border-line-strong lg:grid">
        <div
          role="tabpanel"
          id="discipline-panel"
          aria-labelledby={`discipline-tab-${current.id}`}
          className="relative col-span-7 overflow-hidden"
        >
          <ImagePanel asset={image} sizes="60vw" className="absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-track via-track/40 to-transparent"
          />
          <div key={current.id} className="absolute inset-x-0 bottom-0 p-10">
            <p className="anim-rise font-mono text-sm text-red-text">
              {String(selected + 1).padStart(2, "0")} /{" "}
              {String(disciplines.length).padStart(2, "0")}
            </p>
            <h3 className="anim-rise display mt-3 text-[clamp(3rem,4.6vw,4.6rem)]">
              {current.name}
            </h3>
            <p className="anim-rise mt-3 max-w-md text-muted [animation-delay:60ms]">
              {current.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {current.work.map((item, index) => (
                <li
                  key={item}
                  className="anim-rise border border-line-strong bg-track/60 px-3 py-1.5 font-mono text-xs tracking-wider text-muted uppercase backdrop-blur-sm"
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Team disciplines"
          className="col-span-5 flex flex-col border-l border-line-strong"
          onKeyDown={onKeyDown}
        >
          {disciplines.map((discipline, index) => {
            const active = index === selected;
            return (
              <button
                key={discipline.id}
                id={`discipline-tab-${discipline.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="discipline-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setSelected(index)}
                className={cn(
                  "group relative flex flex-1 items-center gap-6 border-b border-line px-8 text-left transition-colors last:border-b-0",
                  active ? "bg-pit" : "hover:bg-pit/60",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-y-0 left-0 w-0.5 origin-top bg-red transition-transform duration-300",
                    active ? "scale-y-100" : "scale-y-0",
                  )}
                />
                <span className={cn("font-mono text-sm", active ? "text-red-text" : "text-dim")}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-[1.7rem] font-bold tracking-wide uppercase transition-colors",
                    active ? "text-warm" : "text-steel group-hover:text-muted",
                  )}
                >
                  {discipline.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="border-t border-line-strong lg:hidden">
        {disciplines.map((discipline, index) => (
          <details
            key={discipline.id}
            className="group border-b border-line-strong"
            open={index === 0}
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-xs text-red-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-2xl font-bold tracking-wide uppercase">
                {discipline.name}
              </span>
              <span
                aria-hidden="true"
                className="relative size-4 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-warm after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-warm after:transition-transform group-open:after:scale-y-0"
              />
            </summary>
            <div className="pb-6 pl-8">
              <p className="text-muted">{discipline.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {discipline.work.map((item) => (
                  <li
                    key={item}
                    className="border border-line-strong px-2.5 py-1 font-mono text-[0.7rem] tracking-wider text-muted uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
