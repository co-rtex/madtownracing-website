import type { MediaAsset } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechnicalMeta } from "@/components/ui/TechnicalMeta";

/** Editorial page header: oversized title left, photography right. */
export function PageHero({
  label,
  number,
  title,
  subtitle,
  intro,
  asset,
  meta,
  children,
}: {
  label: string;
  number?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  intro: React.ReactNode;
  asset?: MediaAsset;
  meta?: readonly string[];
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate overflow-hidden border-b border-line"
    >
      {asset && (
        <>
          <ImagePanel
            asset={asset}
            priority
            className="absolute inset-y-0 right-0 -z-20 w-full md:w-[62%]"
            imageClassName="anim-settle"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(8_8_8/0.55),var(--track-black)_85%)] md:bg-[linear-gradient(90deg,var(--track-black)_36%,rgb(8_8_8/0.7)_55%,rgb(8_8_8/0.15)_100%)]"
          />
        </>
      )}
      <Container className="flex min-h-[min(760px,88svh)] flex-col justify-end pt-[calc(var(--header-h)+4rem)] pb-12 md:pb-16">
        <SectionLabel number={number} className="anim-fade">
          {label}
        </SectionLabel>
        <h1 id="page-heading" className="anim-rise display mt-6 text-[clamp(3.4rem,8.4vw,8.25rem)]">
          {title}
        </h1>
        {subtitle && (
          <p className="anim-rise mt-4 font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-none font-bold tracking-wide text-steel uppercase [animation-delay:100ms]">
            {subtitle}
          </p>
        )}
        <div className="anim-rise mt-6 max-w-xl text-base leading-relaxed text-muted [animation-delay:180ms] md:text-lg">
          {intro}
        </div>
        {children && <div className="anim-rise mt-8 [animation-delay:260ms]">{children}</div>}
        {meta && (
          <TechnicalMeta
            items={meta}
            className="anim-fade mt-10 self-start [animation-delay:400ms]"
          />
        )}
      </Container>
      <div
        aria-hidden="true"
        className="anim-wipe absolute bottom-0 left-0 h-0.5 w-1/4 bg-red [animation-delay:500ms]"
      />
    </section>
  );
}
