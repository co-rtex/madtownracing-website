import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TelemetryLine } from "@/components/ui/TelemetryLine";

export default function NotFound() {
  return (
    <section aria-labelledby="nf-heading" className="relative overflow-hidden">
      <Container className="flex min-h-[85svh] flex-col justify-center pt-[calc(var(--header-h)+3rem)] pb-16">
        <p className="eyebrow flex items-center gap-2 text-warning">
          <span aria-hidden="true" className="size-2 bg-warning" /> Off track — 404
        </p>
        <h1 id="nf-heading" className="display mt-6 text-[clamp(3.6rem,10vw,9rem)]">
          Track limits<span className="text-red">.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted">
          This page doesn&rsquo;t exist — or it hasn&rsquo;t been built yet. Rejoin the circuit
          below.
        </p>
        <div className="mt-8 flex flex-col gap-3 xs:flex-row">
          <ButtonLink href="/" arrow>
            Back to Pit Lane
          </ButtonLink>
          <ButtonLink href="/journal" variant="secondary">
            Paddock Journal
          </ButtonLink>
        </div>
      </Container>
      <TelemetryLine seed={11} className="absolute bottom-10 left-0 h-24 opacity-40" />
    </section>
  );
}
