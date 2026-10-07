import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Closing call to action used at the end of inner pages. */
export function CtaBand({
  eyebrow,
  title,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: React.ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-garage">
      <div
        aria-hidden="true"
        className="tech-grid absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_70%)]"
      />
      <Container className="relative flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-24">
        <div>
          <p className="eyebrow text-red-text">{eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.8rem,6vw,5.5rem)]">{title}</h2>
        </div>
        <div className="flex shrink-0 flex-col gap-3 xs:flex-row">
          <ButtonLink href={primary.href} arrow>
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
