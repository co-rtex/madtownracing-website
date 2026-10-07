import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { TechnicalMeta } from "@/components/ui/TechnicalMeta";
import { media } from "@/content/media";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex flex-col overflow-hidden lg:min-h-[max(680px,100svh)]"
    >
      <ImagePanel
        asset={media.hero}
        priority
        className="-z-20 aspect-[4/3] xs:aspect-[16/10] md:aspect-[2/1] lg:absolute lg:inset-0 lg:aspect-auto"
        imageClassName="anim-settle"
        showLabel={false}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-track to-transparent lg:hidden"
        />
      </ImagePanel>
      {/* Legibility gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,var(--track-black)_0%,rgb(8_8_8/0.8)_30%,rgb(8_8_8/0.05)_62%,rgb(8_8_8/0.2)_100%)] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-track via-track/50 to-transparent"
      />

      <Container className="relative flex flex-1 flex-col pt-2 pb-8 lg:pt-[calc(var(--header-h)+2rem)] lg:pb-10">
        <p className="anim-fade flex flex-col gap-1 self-start font-display text-sm font-bold tracking-[0.16em] uppercase lg:absolute lg:top-[calc(var(--header-h)+2.5rem)] lg:right-16 lg:items-start">
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="anim-pulse size-2 rotate-45 bg-red" />
            Road to the Grid
          </span>
          <span className="flex items-center gap-2.5 text-red-text">
            <span aria-hidden="true" className="size-2 rotate-45 border border-red" />
            Team Formation
          </span>
        </p>

        <div className="mt-auto pt-8 lg:pt-16">
          <h1 id="hero-heading" className="display text-[clamp(3.5rem,min(8.6vw,12.5vh),8.75rem)]">
            <span className="anim-rise block" style={{ animationDelay: "80ms" }}>
              Madison,
            </span>
            <span className="anim-rise block" style={{ animationDelay: "160ms" }}>
              Meet
            </span>
            <span className="anim-rise block text-red" style={{ animationDelay: "240ms" }}>
              Wheel-to-wheel.
            </span>
          </h1>
          <p
            className="anim-rise mt-6 max-w-[34rem] text-base leading-relaxed text-muted md:text-lg"
            style={{ animationDelay: "380ms" }}
          >
            A student-operated collegiate race team being built in Madison to compete in
            wheel-to-wheel motorsport through the Collegiate Racing Series.
          </p>
          <div
            className="anim-rise mt-8 flex flex-col gap-3 xs:flex-row"
            style={{ animationDelay: "480ms" }}
          >
            <ButtonLink href="/join" arrow>
              Join the Team
            </ButtonLink>
            <ButtonLink href="/partners" variant="secondary">
              Partner with Us
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 md:mt-16">
          <TechnicalMeta
            className="anim-fade [animation-delay:700ms]"
            items={[siteConfig.locationShort, siteConfig.platform.class, siteConfig.platform.car]}
          />
          <span
            aria-hidden="true"
            className="hidden font-display text-[clamp(5rem,9vw,8.5rem)] leading-[0.75] font-black text-transparent [-webkit-text-stroke:1px_rgb(244_242_236/0.28)] sm:block"
          >
            01
          </span>
        </div>
      </Container>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <div
        aria-hidden="true"
        className="anim-wipe absolute bottom-0 left-0 h-0.5 w-1/3 bg-red [animation-delay:600ms]"
      />
    </section>
  );
}
