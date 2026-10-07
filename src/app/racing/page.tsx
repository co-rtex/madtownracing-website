import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { RaceCalendar } from "@/components/racing/RaceCalendar";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TelemetryLine } from "@/components/ui/TelemetryLine";
import { media } from "@/content/media";
import { calendarSeason, events, raceFormats, racingPillars } from "@/content/racing";
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
          <SectionLabel number="02">Calendar</SectionLabel>
          <DisplayHeading id="calendar-heading" size="md" className="mt-4 mb-10">
            {calendarSeason} race calendar
          </DisplayHeading>
          <RaceCalendar season={calendarSeason} events={events} />
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
