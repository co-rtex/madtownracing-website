import Image from "next/image";
import type { RaceEvent } from "@/types/content";
import { cn } from "@/lib/cn";

const statusText: Record<RaceEvent["status"], string> = {
  confirmed: "Confirmed",
  tentative: "Tentative",
  complete: "Complete",
};

/** Reusable event card. Only used for real, confirmed MadTown entries. */
export function TrackCard({ event }: { event: RaceEvent }) {
  return (
    <article className="flex h-full flex-col border border-line-strong bg-pit">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[0.7rem] tracking-wider uppercase">
        <span className="text-steel">Round {event.round}</span>
        <span
          className={cn(
            event.status === "complete"
              ? "text-success"
              : event.status === "confirmed"
                ? "text-warm"
                : "text-warning",
          )}
        >
          {statusText[event.status]}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl leading-tight font-bold uppercase">{event.circuit}</h3>
        <p className="text-sm text-steel">{event.event}</p>
        {event.dates && <p className="mt-2 font-mono text-xs text-muted">{event.dates}</p>}
      </div>
      {event.mapSvg && (
        <div className="relative mx-5 mb-5 aspect-[16/9]">
          <Image
            src={event.mapSvg}
            alt={`${event.circuit} circuit map`}
            fill
            className="object-contain"
          />
        </div>
      )}
      {event.result && (
        <p className="mt-auto border-t border-line px-5 py-3 font-mono text-xs text-warm">
          Result: {event.result}
        </p>
      )}
    </article>
  );
}
