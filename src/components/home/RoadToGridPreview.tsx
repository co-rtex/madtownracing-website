import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { milestones } from "@/content/roadmap";

export function RoadToGridPreview() {
  return (
    <Section tone="garage" aria-labelledby="road-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="05">Live status</SectionLabel>
            <DisplayHeading id="road-heading" size="lg" className="mt-5">
              Road to the grid<span className="text-red">.</span>
            </DisplayHeading>
            <p className="mt-4 max-w-xl text-muted">
              We&rsquo;re building a race team from zero — and documenting every step.
            </p>
          </div>
          <ButtonLink
            href="/road-to-the-grid"
            variant="secondary"
            arrow
            className="self-start md:self-auto"
          >
            Follow the Journey
          </ButtonLink>
        </div>
        <Reveal className="mt-12 border-t border-line pt-10 lg:mt-16 lg:pt-12">
          <RoadmapTimeline milestones={milestones} />
        </Reveal>
      </Container>
    </Section>
  );
}
