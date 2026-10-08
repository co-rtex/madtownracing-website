import Image from "next/image";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ApplyCta } from "@/components/recruitment/ApplyCta";
import { RoleSelector } from "@/components/recruitment/RoleSelector";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clubMedia } from "@/content/clubMedia";
import { media } from "@/content/media";
import { roleInterests, roles } from "@/content/roles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Join the Team",
  description:
    "It takes more than a driver to build a competitive race team. Find a role in engineering, trackside operations, data, business, or media — no racing experience required.",
  path: "/join",
});

const departments = ["Technical", "Operations", "Business"] as const;

export default function JoinPage() {
  return (
    <>
      <PageHero
        label="Recruiting"
        title={
          <>
            Where do you
            <br />
            fit on the grid?
          </>
        }
        intro="MadTown Racing is built for students across engineering, data, business, communications, media, operations, and driving. Find a role that matches what you want to learn and help build the team from the ground up."
        asset={media.joinHero}
      >
        <a
          href="#role-explorer"
          className="inline-flex min-h-12 items-center gap-3 border border-warm/60 px-6 font-display text-[0.95rem] font-bold tracking-[0.08em] uppercase transition-colors hover:bg-warm hover:text-track"
        >
          Find your role ↓
        </a>
      </PageHero>

      <section className="border-b border-line bg-red text-warm">
        <Container className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-none font-extrabold tracking-wide uppercase">
            You do not need prior racing experience.
          </p>
          <p className="font-mono text-xs tracking-[0.14em] uppercase">
            All majors · All years · Build skills on and off the track
          </p>
        </Container>
      </section>

      <Section aria-labelledby="club-media-heading" divider={false}>
        <Container>
          <div className="grid gap-8 border border-line bg-garage p-5 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:p-8 lg:gap-12 lg:p-10">
            <div className="mx-auto w-full max-w-sm">
              <Image
                src={clubMedia.mtrIntroPost}
                alt="MadTown Racing introductory recruiting post"
                width={240}
                height={320}
                unoptimized
                className="h-auto w-full border border-line-strong"
              />
            </div>
            <div className="flex flex-col justify-center">
              <SectionLabel number="01">From MadTown Racing</SectionLabel>
              <DisplayHeading id="club-media-heading" size="md" className="mt-4">
                Built by students<span className="text-red">.</span>
              </DisplayHeading>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                The team is being built around real wheel-to-wheel motorsport and real responsibility.
                Students can contribute through engineering, data, fabrication, race operations,
                business, communications, media, or driving.
              </p>
              <p className="mt-4 font-mono text-xs tracking-[0.14em] text-dim uppercase">
                Real club media from the team&apos;s recruiting materials
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="role-explorer" aria-label="Role explorer" divider={false}>
        <Container>
          <RoleSelector interests={roleInterests} roles={roles} applyCta={<ApplyCta />} />
        </Container>
      </Section>

      <Section tone="garage" aria-labelledby="roles-heading">
        <Container>
          <SectionLabel number="02">Every seat</SectionLabel>
          <DisplayHeading id="roles-heading" size="md" className="mt-4">
            All open roles
          </DisplayHeading>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {departments.map((department) => (
              <div key={department} className="bg-garage p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold tracking-wide text-red-text uppercase">
                  {department}
                </h3>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {roles
                    .filter((role) => role.department === department)
                    .map((role) => (
                      <li key={role.id} className="py-3">
                        <p className="font-display text-lg font-bold uppercase">{role.name}</p>
                        <p className="text-sm text-steel">{role.description}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-xl">
            <ApplyCta />
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Not sure yet?"
        title={
          <>
            Follow the build<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Road to the Grid", href: "/road-to-the-grid" }}
        secondary={{ label: "Meet the Team", href: "/team" }}
      />
    </>
  );
}
