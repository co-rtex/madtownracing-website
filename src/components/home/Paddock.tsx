import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { paddockTiles } from "@/content/media";
import { siteConfig } from "@/content/site";

export function Paddock() {
  return (
    <Section aria-labelledby="paddock-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="08">Social</SectionLabel>
            <DisplayHeading id="paddock-heading" size="lg" className="mt-5">
              From the paddock<span className="text-red">.</span>
            </DisplayHeading>
          </div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start font-display text-lg font-bold tracking-[0.08em] uppercase hover:text-red-text md:self-auto"
          >
            Follow {siteConfig.instagramHandle}
            <Arrow
              direction="up-right"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            <span className="sr-only">on Instagram (opens in a new tab)</span>
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:mt-14">
          {paddockTiles.map((tile, index) => (
            <li key={tile.placeholder}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View on Instagram (opens in a new tab) — tile ${index + 1}`}
                className="group relative block aspect-square overflow-hidden"
              >
                <ImagePanel
                  asset={tile}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="absolute inset-0"
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 border border-line transition-colors group-hover:border-red"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
