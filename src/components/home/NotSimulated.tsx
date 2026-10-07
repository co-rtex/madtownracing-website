import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { DisplayHeading, RedStop } from "@/components/ui/DisplayHeading";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { media } from "@/content/media";
import { raceFormats } from "@/content/racing";

const images = [media.formatSprint, media.formatEndurance, media.formatChampionship];

export function NotSimulated() {
  return (
    <Section tone="garage" aria-labelledby="sim-heading" divider={false}>
      <Container>
        <Reveal>
          <DisplayHeading id="sim-heading" size="lg">
            <span data-reveal className="block">
              This isn&rsquo;t simulated
              <RedStop />
            </span>
          </DisplayHeading>
          <p
            data-reveal
            style={{ ["--i" as string]: 1 }}
            className="mt-4 text-lg text-muted md:text-xl"
          >
            Real circuits. Real pit stops. Real strategy. Real consequences.
          </p>
        </Reveal>

        <Reveal as="ul" className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 lg:gap-5">
          {raceFormats.map((format, index) => (
            <li key={format.name} data-reveal style={{ ["--i" as string]: index }}>
              <Link
                href="/racing"
                className="group relative flex h-full min-h-60 overflow-hidden border border-line-strong bg-pit transition-colors hover:border-warm/50 lg:min-h-72"
              >
                <ImagePanel
                  asset={images[index]!}
                  sizes="(min-width: 768px) 20vw, 50vw"
                  showLabel={false}
                  className="absolute inset-y-0 right-0 w-[58%]"
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-1"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(90deg,var(--pit-black)_38%,rgb(23_23_23/0.75)_60%,rgb(23_23_23/0.1)_100%)]"
                />
                <div className="relative flex flex-col p-6 lg:p-7">
                  <span className="font-mono text-sm text-steel transition-colors group-hover:text-red-text">
                    {format.number}
                  </span>
                  <h3 className="display mt-2 text-[2.4rem] lg:text-[2.9rem]">{format.name}</h3>
                  <ul className="mt-4 space-y-0.5 text-sm leading-relaxed text-muted">
                    {format.lines.map((line) => (
                      <li key={line} className="max-w-[13rem]">
                        {line}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-[0.7rem] tracking-[0.14em] text-steel uppercase transition-colors group-hover:text-warm">
                    Racing formats
                    <Arrow className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
