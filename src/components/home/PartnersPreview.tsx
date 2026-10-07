import { BenefitGrid } from "@/components/partners/BenefitGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { media } from "@/content/media";
import { partners } from "@/content/partners";

export function PartnersPreview() {
  return (
    <Section tone="garage" aria-labelledby="partners-heading" className="overflow-hidden">
      <ImagePanel
        asset={media.partnersHero}
        showLabel={false}
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-60 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--garage-black)_45%,rgb(17_17_17/0.6)_75%,rgb(17_17_17/0.3))] lg:block"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <SectionLabel number="07">Partnerships</SectionLabel>
          <DisplayHeading id="partners-heading" size="xl" className="mt-5">
            Put your brand
            <br />
            on the grid<span className="text-red">.</span>
          </DisplayHeading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Partner with a student-operated motorsports organization gaining hands-on experience in
            engineering, analytics, operations, business, media, and competitive racing.
          </p>
          <ButtonLink href="/partners" arrow className="mt-8">
            Partner with Us
          </ButtonLink>
        </div>

        <div className="mt-14 lg:mt-20">
          <BenefitGrid />
        </div>

        {partners.length === 0 && (
          <div className="mt-px flex flex-col gap-4 border border-t-0 border-line bg-pit p-6 md:flex-row md:items-center md:gap-10 md:p-8">
            <p className="eyebrow shrink-0 text-red-text">Founding Partners</p>
            <p className="text-muted">
              Your company could be one of the organizations that helps put MadTown Racing on the
              grid.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
