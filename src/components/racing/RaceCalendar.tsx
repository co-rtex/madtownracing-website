import type { RaceEvent } from "@/types/content";
import { TrackCard } from "@/components/racing/TrackCard";
import { Arrow } from "@/components/ui/Arrow";
import { siteConfig } from "@/content/site";
import Link from "next/link";

/**
 * Renders confirmed events as TrackCards. With no confirmed events it shows a
 * neutral "coming soon" state that never implies specific circuits or rounds.
 */
export function RaceCalendar({
  season,
  events,
}: {
  /** Confirmed season only; omit when unknown. */
  season?: string | null;
  events: RaceEvent[];
}) {
  if (events.length > 0) {
    return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <li key={event.round}>
            <TrackCard event={event} />
          </li>
        ))}
      </ul>
    );
  }
  return <CalendarComingSoon season={season} />;
}

function CalendarComingSoon({ season }: { season?: string | null }) {
  const year = season?.trim();
  return (
    <div className="relative overflow-hidden border border-line-strong bg-pit">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute top-0 left-0 h-0.5 w-24 bg-red" />
      <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-12 lg:p-14">
        <div className="lg:col-span-7">
          <p className="eyebrow text-steel">Competition schedule</p>
          <p className="display mt-4 text-[clamp(3rem,7vw,6.5rem)]">
            Coming soon<span className="text-red">.</span>
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            The calendar will be published once MadTown Racing&rsquo;s competition schedule is
            confirmed.
          </p>
          <div className="mt-8 flex flex-col gap-4 xs:flex-row xs:items-center xs:gap-8">
            <Link
              href="/road-to-the-grid"
              className="group inline-flex items-center gap-2 font-display text-lg font-bold tracking-[0.08em] uppercase hover:text-red-text"
            >
              Follow the Road to the Grid
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.14em] text-muted uppercase hover:text-warm"
            >
              Updates on {siteConfig.instagramHandle} ↗
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* Timing-screen style status readout */}
        <dl className="self-end border border-line bg-track/70 font-mono text-xs tracking-[0.14em] uppercase lg:col-span-5">
          {year && (
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
              <dt className="text-dim">Season</dt>
              <dd className="text-warm">{year}</dd>
            </div>
          )}
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
            <dt className="text-dim">Schedule</dt>
            <dd className="flex items-center gap-2 text-warning">
              <span aria-hidden="true" className="anim-pulse size-1.5 bg-warning" />
              Awaiting confirmation
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <dt className="text-dim">Series</dt>
            <dd className="text-right text-muted">{siteConfig.platform.series}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
