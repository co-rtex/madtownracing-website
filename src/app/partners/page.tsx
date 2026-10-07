import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { BenefitGrid } from "@/components/partners/BenefitGrid";
import { PartnerContact } from "@/components/partners/PartnerContact";
import { PartnerTierCard } from "@/components/partners/PartnerTierCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { media } from "@/content/media";
import { partners, partnerTiers } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Partners",
  description:
    "Partner with MadTown Racing and support students gaining hands-on experience in engineering, analytics, operations, business, media, and motorsport.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partnerships"
        title={
          <>
            Put your brand
            <br />
            on the grid<span className="text-red">.</span>
          </>
        }
        intro="Support students gaining hands-on experience in engineering, analytics, operations, business, media, and motorsport."
        asset={media.partnersHero}
      >
        <div className="flex flex-col gap-3 xs:flex-row">
          <ButtonLink href="#contact" arrow>
            Request Partnership Deck
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" arrow>
            Contact the Team
          </ButtonLink>
        </div>
      </PageHero>

      <Section aria-labelledby="benefits-heading">
        <Container>
          <div className="mb-10 max-w-2xl lg:mb-14">
            <SectionLabel number="01">Visibility</SectionLabel>
            <DisplayHeading id="benefits-heading" size="md" className="mt-4">
              Where your brand shows up
            </DisplayHeading>
            <p className="mt-4 text-muted">
              Every partnership is tailored. Specific placements and deliverables are agreed with
              each partner and subject to series and venue rules.
            </p>
          </div>
          <BenefitGrid detailed />
        </Container>
      </Section>

      <Section tone="garage" aria-labelledby="tiers-heading">
        <Container>
          <div className="mb-10 max-w-2xl lg:mb-14">
            <SectionLabel number="02">Partnership tiers</SectionLabel>
            <DisplayHeading id="tiers-heading" size="md" className="mt-4">
              Ways to partner
            </DisplayHeading>
          </div>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {partnerTiers.map((tier, index) => (
              <li key={tier.name}>
                <PartnerTierCard tier={tier} index={index} featured={index === 0} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="partners-list-heading">
        <Container>
          <SectionLabel number="03">Our partners</SectionLabel>
          {partners.length > 0 ? (
            <>
              <DisplayHeading id="partners-list-heading" size="md" className="mt-4">
                Our partners
              </DisplayHeading>
              <ul className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
                {partners.map((partner) => (
                  <li key={partner.name} className="relative aspect-[3/2] bg-pit">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-8"
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <DisplayHeading id="partners-list-heading" size="lg">
                  Founding
                  <br />
                  partners<span className="text-red">.</span>
                </DisplayHeading>
                <p className="mt-5 max-w-lg text-lg text-muted">
                  Your company could be one of the organizations that helps put MadTown Racing on
                  the grid. Founding partners are recognized as part of the team&rsquo;s story from
                  day one.
                </p>
              </div>
              <ul aria-hidden="true" className="grid grid-cols-3 gap-2 lg:col-span-6">
                {Array.from({ length: 6 }, (_, i) => (
                  <li
                    key={i}
                    className="flex aspect-[3/2] items-center justify-center border border-dashed border-line-strong font-mono text-[0.65rem] tracking-widest text-dim uppercase"
                  >
                    {i === 0 ? "Your logo" : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <Section id="contact" tone="garage" aria-labelledby="contact-heading">
        <Container>
          <SectionLabel number="04">Contact</SectionLabel>
          <DisplayHeading id="contact-heading" size="md" className="mt-4 mb-10">
            Start the conversation
          </DisplayHeading>
          <PartnerContact />
        </Container>
      </Section>
    </>
  );
}
