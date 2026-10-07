import { CarDiagram } from "@/components/car/CarDiagram";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { carIntro, carSystems } from "@/content/car";
import { siteConfig } from "@/content/site";

const previewIds = ["suspension", "data", "safety", "brakes"];

export function CarPreview() {
  const systems = carSystems.filter((s) => previewIds.includes(s.id));
  return (
    <Section tone="garage" aria-labelledby="platform-heading" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_60%,black,transparent)]"
      />
      <Container className="relative">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel number="03">The Platform</SectionLabel>
            <h2 id="platform-heading" className="display mt-5 text-[clamp(3.4rem,8vw,7.5rem)]">
              <span data-reveal className="block">
                Mazda
              </span>
              <span data-reveal style={{ ["--i" as string]: 1 }} className="block">
                MX-5 ND
              </span>
            </h2>
            <p data-reveal style={{ ["--i" as string]: 2 }} className="eyebrow mt-4 text-steel">
              {siteConfig.platform.class}
            </p>
          </div>
          <div data-reveal style={{ ["--i" as string]: 2 }} className="md:col-span-5 md:self-end">
            <p className="max-w-md text-muted md:ml-auto">{carIntro}</p>
          </div>
        </Reveal>

        <CarDiagram
          id="home-car"
          systems={systems}
          className="mx-auto mt-6 max-w-[1180px] lg:mt-4"
        />

        <ol className="mt-6 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 lg:hidden">
          {systems.map((s) => (
            <li key={s.id} className="bg-garage p-4">
              <span className="font-mono text-xs text-red-text">{s.number}</span>
              <p className="mt-1 font-display text-lg font-bold uppercase">{s.name}</p>
              <p className="text-xs text-steel">{s.short}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex lg:mt-0 lg:justify-end">
          <ButtonLink href="/car" variant="secondary" arrow>
            Explore the Car
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
