import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="relative overflow-hidden bg-warm text-track"
    >
      <div aria-hidden="true" className="absolute top-0 left-0 h-2 w-1/3 bg-red" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4%] -bottom-[18%] font-display text-[clamp(14rem,34vw,32rem)] leading-none font-black text-transparent italic [-webkit-text-stroke:2px_rgb(8_8_8/0.07)]"
      >
        M/R
      </div>
      <Container className="relative py-20 md:py-28 lg:py-36">
        <p className="eyebrow text-dim">Lights out soon</p>
        <h2 id="final-heading" className="display mt-5 text-[clamp(4rem,12vw,11rem)]">
          The grid
          <br />
          starts here<span className="text-red">.</span>
        </h2>
        <div className="mt-10 flex flex-col gap-3 xs:flex-row">
          <ButtonLink href="/join" arrow>
            Join MadTown Racing
          </ButtonLink>
          <ButtonLink href="/partners" variant="inverse">
            Partner with Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
