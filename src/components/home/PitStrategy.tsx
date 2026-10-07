import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pitCrew, pitSequence } from "@/content/pit";

const TOTAL = 240;
const DURATION = 4.2; // seconds the illustrative sequence takes to play

export function PitStrategy() {
  return (
    <Section aria-labelledby="pit-heading" className="overflow-hidden">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel number="04">Endurance Operations</SectionLabel>
            <DisplayHeading id="pit-heading" size="xl" className="mt-5">
              <span data-reveal className="block">
                Four minutes.
              </span>
              <span data-reveal style={{ ["--i" as string]: 1 }} className="block text-steel">
                Dozens of ways
              </span>
              <span data-reveal style={{ ["--i" as string]: 2 }} className="block text-steel">
                to lose them<span className="text-red">.</span>
              </span>
            </DisplayHeading>
          </div>
          <p
            data-reveal
            style={{ ["--i" as string]: 3 }}
            className="text-lg leading-relaxed text-muted lg:col-span-4 lg:pb-2"
          >
            Endurance racing turns every driver change, communication decision, and pit procedure
            into part of the competition.
          </p>
        </Reveal>

        <Reveal
          threshold={0.35}
          className="group/pit mt-14 border border-line-strong bg-garage lg:mt-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3 md:px-8">
            <p className="eyebrow flex items-center gap-2 text-muted">
              <span aria-hidden="true" className="size-1.5 bg-red" /> Pit entry
            </p>
            <p className="eyebrow border border-warning/40 px-2 py-1 text-warning">
              Illustrative pit sequence
            </p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden px-8 pt-24 pb-24 md:block">
            <ol className="relative h-px bg-line-strong" aria-label="Illustrative pit sequence">
              <li aria-hidden="true" className="absolute inset-y-0 left-0 w-full">
                <span
                  data-reveal-line
                  className="absolute -top-px left-0 block h-[3px] w-full bg-red"
                  style={{
                    transitionDuration: `${DURATION}s`,
                    transitionTimingFunction: "linear",
                  }}
                />
              </li>
              {pitSequence.map((step, index) => {
                const left = (step.seconds / TOTAL) * 100;
                const upper = index % 2 === 0;
                const delay = (step.seconds / TOTAL) * DURATION + 0.15;
                return (
                  <li key={step.time} className="absolute top-0" style={{ left: `${left}%` }}>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-warm bg-track transition-colors group-data-[visible=true]/pit:border-red group-data-[visible=true]/pit:bg-red"
                      style={{ transitionDelay: `${delay}s` }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-0 w-px bg-line-strong"
                      style={upper ? { bottom: 8, height: 28 } : { top: 8, height: 28 }}
                    />
                    <span
                      className={
                        "absolute w-max -translate-x-1/2 text-center" +
                        (index === 0 ? " translate-x-[-12%] text-left" : "") +
                        (index === pitSequence.length - 1 ? " translate-x-[-88%] text-right" : "")
                      }
                      style={upper ? { bottom: 40 } : { top: 40 }}
                    >
                      <span className="block font-mono text-sm text-warm">{step.time}</span>
                      <span className="block font-display text-sm font-bold tracking-[0.12em] text-steel uppercase">
                        {step.label}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile vertical timeline */}
          <ol
            className="relative mx-5 my-8 border-l border-line-strong md:hidden"
            aria-label="Illustrative pit sequence"
          >
            {pitSequence.map((step) => (
              <li key={step.time} className="relative flex items-baseline gap-4 py-2.5 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -left-[5px] size-2.5 -translate-y-1/2 rotate-45 bg-red"
                />
                <span className="w-14 font-mono text-sm text-warm">{step.time}</span>
                <span className="font-display text-base font-bold tracking-[0.12em] text-steel uppercase">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>

          <div className="grid border-t border-line md:grid-cols-12">
            <div className="border-b border-line p-5 md:col-span-5 md:border-r md:border-b-0 md:p-8">
              <PitBoxDiagram />
            </div>
            <ul className="grid grid-cols-2 md:col-span-7">
              {pitCrew.map((crew, index) => (
                <li
                  key={crew.number + crew.role}
                  className={
                    "flex flex-col justify-between gap-6 border-line p-5 md:p-8" +
                    (index % 2 === 0 ? " border-r" : "") +
                    (index < 2 ? " border-b" : "")
                  }
                >
                  <span className="font-display text-5xl leading-none font-black text-transparent [-webkit-text-stroke:1px_rgb(244_242_236/0.4)]">
                    {crew.number}
                  </span>
                  <span>
                    <span className="eyebrow block text-dim">Crew position</span>
                    <span className="mt-1 block font-display text-2xl font-bold uppercase">
                      {crew.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="border-t border-line px-5 py-3 font-mono text-[0.68rem] leading-relaxed text-steel md:px-8">
            Timings and crew roles are illustrative only and do not represent MadTown Racing
            performance data or series pit-stop rules.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Top-down schematic of a pit box with numbered crew positions. */
function PitBoxDiagram() {
  return (
    <svg
      viewBox="0 0 360 220"
      className="h-auto w-full"
      role="img"
      aria-label="Schematic pit box with four crew positions around the car"
    >
      <rect
        x="1"
        y="1"
        width="358"
        height="218"
        fill="none"
        stroke="rgb(255 255 255 / .15)"
        strokeDasharray="4 4"
      />
      <text
        x="12"
        y="20"
        fill="#a6a6a6"
        fontSize="9"
        fontFamily="var(--font-plex-mono)"
        letterSpacing="1.5"
      >
        PIT BOX
      </text>
      <path d="M0 200H360" stroke="rgb(255 255 255 / .2)" />
      <text
        x="12"
        y="214"
        fill="#666"
        fontSize="8"
        fontFamily="var(--font-plex-mono)"
        letterSpacing="1.5"
      >
        PIT WALL
      </text>
      {/* Car, top-down, nose right */}
      <g transform="translate(95 82)">
        <rect
          x="0"
          y="0"
          width="170"
          height="64"
          rx="22"
          fill="#1f1f1f"
          stroke="#d8d6d0"
          strokeWidth="1.2"
        />
        <rect x="70" y="10" width="44" height="44" rx="8" fill="#0d0d0d" stroke="#666" />
        <rect x="18" y="-6" width="30" height="10" fill="#333" />
        <rect x="18" y="60" width="30" height="10" fill="#333" />
        <rect x="122" y="-6" width="30" height="10" fill="#333" />
        <rect x="122" y="60" width="30" height="10" fill="#333" />
        <path d="M140 32H168" stroke="#e21b22" strokeWidth="3" />
      </g>
      <path d="M20 114H80M290 114H345" stroke="#e21b22" strokeDasharray="2 5" />
      <path d="M335 108l10 6-10 6" fill="none" stroke="#e21b22" />
      {[
        { n: "01", x: 120, y: 54 },
        { n: "02", x: 230, y: 174 },
        { n: "03", x: 120, y: 174 },
        { n: "04", x: 300, y: 54 },
      ].map((p) => (
        <g key={p.n} transform={`translate(${p.x} ${p.y})`}>
          <circle r="13" fill="#080808" stroke="#e21b22" />
          <text
            y="3.5"
            textAnchor="middle"
            fill="#f4f2ec"
            fontSize="10"
            fontFamily="var(--font-plex-mono)"
          >
            {p.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
