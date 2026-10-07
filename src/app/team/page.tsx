import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { MemberCard } from "@/components/team/MemberCard";
import { OrgChart } from "@/components/team/OrgChart";
import { RosterComingSoon } from "@/components/team/RosterComingSoon";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { media } from "@/content/media";
import { members } from "@/content/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Team",
  description:
    "MadTown Racing brings together students across engineering, operations, business, media, and motorsport to build a competitive race program.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="The Team"
        title="Our team"
        subtitle={
          <>
            Students. Same goal<span className="text-red">.</span>
          </>
        }
        intro="MadTown Racing brings together students across engineering, operations, business, media, and motorsport to build a competitive race program."
        asset={media.teamHero}
        meta={["Technical", "Operations", "Business"]}
      />

      <Section aria-labelledby="structure-heading">
        <Container>
          <div className="mb-12 max-w-2xl lg:mb-16">
            <SectionLabel number="01">Structure</SectionLabel>
            <DisplayHeading id="structure-heading" size="md" className="mt-4">
              Organizational structure
            </DisplayHeading>
            <p className="mt-4 text-muted">
              Organized like a professional race team: one direction, three departments, every role
              connected to what happens on track.
            </p>
          </div>
          <OrgChart />
        </Container>
      </Section>

      <Section tone="garage" aria-labelledby="roster-heading">
        <Container>
          <div className="mb-10 lg:mb-14">
            <SectionLabel number="02">Roster</SectionLabel>
            <DisplayHeading id="roster-heading" size="md" className="mt-4">
              Meet the team
            </DisplayHeading>
          </div>
          {members.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member) => (
                <li key={member.name}>
                  <MemberCard member={member} />
                </li>
              ))}
            </ul>
          ) : (
            <RosterComingSoon />
          )}
        </Container>
      </Section>

      <CtaBand
        eyebrow="No racing experience required"
        title={
          <>
            Find your seat<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Join the Team", href: "/join" }}
        secondary={{ label: "Road to the Grid", href: "/road-to-the-grid" }}
      />
    </>
  );
}
