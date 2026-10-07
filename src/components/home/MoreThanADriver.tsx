import { DisciplineExplorer } from "@/components/home/DisciplineExplorer";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DisplayHeading, RedStop } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { disciplines } from "@/content/disciplines";
import { media } from "@/content/media";

export function MoreThanADriver() {
  return (
    <Section aria-labelledby="driver-heading">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="02">Recruiting</SectionLabel>
            <DisplayHeading id="driver-heading" size="xl" className="mt-5">
              <span data-reveal className="block">
                It takes more
              </span>
              <span data-reveal style={{ ["--i" as string]: 1 }} className="block">
                than a driver
                <RedStop />
              </span>
            </DisplayHeading>
          </div>
          <div data-reveal style={{ ["--i" as string]: 2 }} className="lg:col-span-5 lg:pb-2">
            <p className="text-lg leading-relaxed text-muted">
              A race car on track is the visible tip of a much bigger operation. Engineers, crew,
              strategists, analysts, business leads, and storytellers all decide the result.{" "}
              <strong className="font-semibold text-warm">
                You do not need prior racing experience.
              </strong>
            </p>
            <ButtonLink href="/join" arrow className="mt-6">
              Find Your Role
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-12 lg:mt-16">
          <DisciplineExplorer disciplines={disciplines} image={media.disciplines} />
        </div>
      </Container>
    </Section>
  );
}
