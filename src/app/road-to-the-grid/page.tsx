import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { MilestoneDetail } from "@/components/roadmap/MilestoneDetail";
import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { media } from "@/content/media";
import { milestones } from "@/content/roadmap";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Road to the Grid",
  description:
    "Follow MadTown Racing as we move from an idea in Madison to a student-operated race program on the grid.",
  path: "/road-to-the-grid",
});

export default function RoadToTheGridPage() {
  const current = milestones.filter((m) => m.status === "active");
  return (
    <>
      <PageHero
        label="Road to the Grid"
        title={
          <>
            Building a race team
            <br />
            from zero<span className="text-red">.</span>
          </>
        }
        intro="Follow MadTown Racing as we move from an idea in Madison to a student-operated race program on the grid."
        asset={media.roadHero}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="eyebrow text-dim">Now</span>
          {current.map((m) => (
            <span key={m.number} className="flex items-center gap-3">
              <span className="font-display text-xl font-bold uppercase">
                {m.number} {m.title}
              </span>
              <StatusBadge status={m.status} />
            </span>
          ))}
        </div>
      </PageHero>

      <Section tone="garage" aria-labelledby="timeline-heading">
        <Container>
          <SectionLabel number="01">Timeline</SectionLabel>
          <DisplayHeading id="timeline-heading" size="md" className="mt-4">
            Six steps to the green flag
          </DisplayHeading>
          <Reveal className="mt-12 lg:mt-16">
            <RoadmapTimeline milestones={milestones} showSummary linkToDetail />
          </Reveal>
          <ul
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6"
            aria-label="Status key"
          >
            {(["complete", "active", "next", "upcoming"] as const).map((status) => (
              <li key={status}>
                <StatusBadge status={status} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="detail-heading">
        <Container>
          <h2 id="detail-heading" className="sr-only">
            Milestone details
          </h2>
          {milestones.map((milestone) => (
            <MilestoneDetail key={milestone.number} milestone={milestone} />
          ))}
        </Container>
      </Section>

      <CtaBand
        eyebrow="Help us reach the grid"
        title={
          <>
            Get on board early<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Join the Team", href: "/join" }}
        secondary={{ label: "Become a Founding Partner", href: "/partners" }}
      />
    </>
  );
}
