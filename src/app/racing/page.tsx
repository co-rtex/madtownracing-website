import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { TrackCard } from "@/components/racing/TrackCard";
import { TrackOutline } from "@/components/racing/TrackOutline";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TelemetryLine } from "@/components/ui/TelemetryLine";
import { media } from "@/content/media";
import { events, raceFormats, racingPillars } from "@/content/racing";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Racing",
  description:
    "The Collegiate Racing Series provides a wheel-to-wheel environment where students learn through racing, strategy, operations, and teamwork.",
  path: "/racing",
});

export default function RacingPage() {
  return (
    <>
      <PageHero
        label="Racing"
        title={
          <>
            Real racing.
            <br />
            Real experience<span className="text-red">.</span>
          </>
        }
        intro="The Collegiate Racing Series provides a wheel-to-wheel environment where students learn through racing, strategy, operations, and teamwork."
        asset={media.racingHero}
        meta={[siteConfig.platform.series, siteConfig.platform.class, siteConfig.platform.car]}
      />

      <section aria-label="What racing involves" className="border-b border-line bg-garage">
        <Container>
          <Reveal as="ul" className="grid sm:grid-cols-2 lg:grid-cols-4">
            {racingPillars.map((pillar, index) => (
              <li
                key={pillar.title}
                data-reveal
                style={{ ["--i" as string]: index }}
                className="border-line py-8 max-sm:border-b max-sm:last:border-b-0 sm:max-lg:odd:pr-6 sm:max-lg:even:pl-6 lg:border-l lg:px-8 lg:py-12 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="font-mono text-xs text-red-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold uppercase">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{pillar.body}</p>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <Section aria-labelledby="format-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel number="01">Series format</SectionLabel>
              <DisplayHeading id="format-heading" size="lg" className="mt-4">
                Sprint. Endurance.
                <br />
                Championship<span className="text-red">.</span>
              </DisplayHeading>
              <p className="mt-6 max-w-md text-muted">
                Collegiate racing combines short wheel-to-wheel sprints with longer endurance
                events. Sprints reward racecraft and preparation; endurance races reward the whole
                team — driver changes, pit procedures, communication, and strategy.
              </p>
            </div>
            <ol className="border-t border-line lg:col-span-7">
              {raceFormats.map((format) => (
                <li
                  key={format.name}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-8 md:grid-cols-[5rem_1fr]"
                >
                  <span className="font-display text-5xl leading-none font-black text-transparent [-webkit-text-stroke:1px_rgb(244_242_236/0.45)] md:text-6xl">
                    {format.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
                      {format.name}
                    </h3>
                    <p className="mt-2 text-steel">{format.lines.join(" ")}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <TelemetryLine seed={7} className="mt-12 h-16 opacity-60" />
        </Container>
      </Section>

      <Section tone="garage" aria-labelledby="calendar-heading">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel number="02">Calendar</SectionLabel>
              <DisplayHeading id="calendar-heading" size="md" className="mt-4">
                Future race calendar
              </DisplayHeading>
            </div>
            <p className="eyebrow text-steel">
              {events.length ? `${events.length} rounds` : "Schedule to be announced"}
            </p>
          </div>

          {events.length > 0 ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {events.map((event) => (
                <li key={event.round}>
                  <TrackCard event={event} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 border border-line-strong">
              <ul aria-hidden="true" className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
                {[0, 1, 2, 3].map((slot) => (
                  <li key={slot} className="bg-garage p-5 opacity-60">
                    <div className="flex justify-between font-mono text-[0.7rem] tracking-wider text-dim uppercase">
                      <span>Round {String(slot + 1).padStart(2, "0")}</span>
                      <span>TBA</span>
                    </div>
                    <div className="mx-auto mt-4 max-w-[180px]">
                      <TrackOutline variant={slot} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 border-t border-line-strong bg-pit p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div>
                  <p className="font-display text-2xl font-bold uppercase">
                    Schedule to be announced
                  </p>
                  <p className="mt-1 text-sm text-steel">
                    MadTown Racing&rsquo;s first entries will be published here once confirmed.
                    Follow the Road to the Grid for progress.
                  </p>
                </div>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs tracking-[0.14em] text-muted uppercase hover:text-warm"
                >
                  Updates on {siteConfig.instagramHandle} ↗
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CtaBand
        eyebrow="Every role matters on race day"
        title={
          <>
            Be part of race day<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Join the Team", href: "/join" }}
        secondary={{ label: "The Car", href: "/car" }}
      />
    </>
  );
}
