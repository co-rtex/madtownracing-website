import { Container } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

const steps = [
  {
    label: "Classroom",
    detail: "Engineering, business, data, and design coursework.",
  },
  {
    label: "MadTown Racing",
    detail: "Apply it on a real car, with a real team, under real deadlines.",
  },
  {
    label: "CRS Competition",
    detail: "Test decisions against other teams on race weekends.",
  },
  {
    label: "Motorsport Industry",
    detail: "Build experience that is relevant to motorsport careers.",
  },
];

export function CampusToMotorsport() {
  return (
    <Section aria-labelledby="campus-heading">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel number="06">Pathway</SectionLabel>
          <DisplayHeading id="campus-heading" size="lg" className="mt-5">
            From campus
            <br />
            to motorsport<span className="text-red">.</span>
          </DisplayHeading>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Collegiate motorsport puts students in the same kinds of situations professional teams
            face: limited time, limited budgets, and decisions measured by a stopwatch. The
            experience is hands-on, practical, and relevant to careers across the motorsport and
            automotive world.
          </p>
        </div>

        <Reveal as="ol" className="relative lg:col-span-7 lg:pl-8">
          {steps.map((step, index) => {
            const isTeam = index === 1;
            return (
              <li
                key={step.label}
                data-reveal
                style={{ ["--i" as string]: index }}
                className="relative grid grid-cols-[3rem_1fr] gap-4 pb-8 last:pb-0 md:grid-cols-[4rem_1fr]"
              >
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 bottom-1 left-6 w-px bg-line-strong md:left-8"
                  >
                    <span className="absolute bottom-0 -left-[3.5px] size-2 rotate-45 border-r border-b border-line-strong" />
                  </span>
                )}
                <span
                  className={cn(
                    "flex size-12 items-center justify-center border font-mono text-sm md:size-16",
                    isTeam ? "border-red bg-red text-warm" : "border-line-strong text-steel",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-b border-line pb-8 md:pt-2">
                  <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-steel">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
