import { CarExplorer } from "@/components/car/CarExplorer";
import { CarSystemCard } from "@/components/car/CarSystemCard";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechnicalMeta } from "@/components/ui/TechnicalMeta";
import { carIntro, carSystems } from "@/content/car";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Car",
  description:
    "The Mazda MX-5 ND platform used in the CRS A-Series — and the systems MadTown Racing will prepare, measure, and race.",
  path: "/car",
});

export default function CarPage() {
  return (
    <>
      <section
        aria-labelledby="page-heading"
        className="relative overflow-hidden border-b border-line bg-garage"
      >
        <div
          aria-hidden="true"
          className="tech-grid absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_60%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-track to-transparent"
        />
        <Container className="relative pt-[calc(var(--header-h)+3.5rem)] pb-12 md:pb-16">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="anim-fade flex items-center gap-4">
                <span aria-hidden="true" className="h-12 w-0.5 bg-red" />
                <span className="font-display text-2xl font-bold tracking-wide uppercase md:text-3xl">
                  The platform
                </span>
              </p>
              <h1
                id="page-heading"
                className="anim-rise display mt-4 text-[clamp(4rem,10vw,9.5rem)]"
              >
                Mazda
                <br />
                MX-5 ND
              </h1>
              <p className="anim-rise eyebrow mt-5 text-steel [animation-delay:120ms]">
                {siteConfig.platform.class}
              </p>
            </div>
            <div className="anim-rise [animation-delay:200ms] md:col-span-5 md:self-end">
              <p className="max-w-md leading-relaxed text-muted md:ml-auto">{carIntro}</p>
              <TechnicalMeta
                items={["Rear-wheel drive", "Two-seat roadster", siteConfig.platform.class]}
                className="mt-6 md:ml-auto md:w-fit"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <h2 className="sr-only">Car systems</h2>
            <CarExplorer systems={carSystems} />
          </div>
        </Container>
      </section>

      <Section aria-labelledby="systems-heading">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel number="01">Engineering dossier</SectionLabel>
              <DisplayHeading id="systems-heading" size="md" className="mt-4">
                Explore key systems
              </DisplayHeading>
            </div>
            <p className="max-w-sm text-sm text-steel">
              Detailed specifications will be published once the team car is acquired and prepared
              to series requirements.
            </p>
          </div>
          <Reveal as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carSystems.map((system, index) => (
              <li key={system.id} data-reveal style={{ ["--i" as string]: index % 3 }}>
                <CarSystemCard system={system} />
              </li>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Engineering, data, and trackside roles open"
        title={
          <>
            Make the car faster<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Find Your Role", href: "/join" }}
        secondary={{ label: "Partner with Us", href: "/partners" }}
      />
    </>
  );
}
