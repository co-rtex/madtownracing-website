import type { Milestone } from "@/types/content";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/cn";

/** Index of the furthest milestone that is complete or in progress. */
function progressIndex(milestones: Milestone[]) {
  let index = -1;
  milestones.forEach((m, i) => {
    if (m.status === "complete" || m.status === "active") index = i;
  });
  return index;
}

/**
 * Horizontal on desktop, vertical on mobile. Driven entirely by
 * content/roadmap.ts. Wrap in <Reveal> to animate the progress line.
 */
export function RoadmapTimeline({
  milestones,
  showSummary = false,
  linkToDetail = false,
}: {
  milestones: Milestone[];
  showSummary?: boolean;
  linkToDetail?: boolean;
}) {
  const reached = progressIndex(milestones);
  const count = milestones.length;
  // Desktop: progress runs through the centre of the reached milestone column.
  const progress = reached < 0 ? 0 : ((reached + 0.5) / count) * 100;

  return (
    <div className="relative">
      {/* Desktop rail */}
      <div
        aria-hidden="true"
        className="absolute top-[7px] right-0 left-0 hidden h-px bg-line-strong lg:block"
      >
        <span
          data-reveal-line
          className="absolute -top-px left-0 block h-[3px] bg-red"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Mobile rail */}
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong lg:hidden"
      >
        <span
          className="absolute top-0 -left-px block w-[3px] bg-red"
          style={{
            height: `${reached < 0 ? 0 : ((reached + 0.5) / count) * 100}%`,
          }}
        />
      </div>

      <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-0">
        {milestones.map((milestone, index) => {
          const done = milestone.status === "complete";
          const active = milestone.status === "active";
          const Wrapper = linkToDetail ? "a" : "div";
          return (
            <li
              key={milestone.number}
              data-reveal
              style={{ ["--i" as string]: index }}
              className="relative pl-9 lg:pl-0"
            >
              <Wrapper
                {...(linkToDetail && {
                  href: `#milestone-${milestone.number}`,
                })}
                className={cn("group block lg:pr-6", linkToDetail && "outline-offset-4")}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-0.5 left-0 flex size-[15px] items-center justify-center lg:static lg:mb-6",
                    done && "bg-success",
                    active && "bg-red",
                    milestone.status === "next" && "border border-warm bg-track",
                    milestone.status === "upcoming" && "border border-dark-steel bg-track",
                  )}
                >
                  {active && <span className="anim-pulse size-1.5 bg-warm" />}
                </span>
                <span className="font-mono text-sm text-steel">{milestone.number}</span>
                <h3
                  className={cn(
                    "mt-1 font-display text-2xl leading-tight font-bold uppercase transition-colors xl:text-[1.7rem]",
                    milestone.status === "upcoming" ? "text-muted" : "text-warm",
                    linkToDetail && "group-hover:text-red-text",
                  )}
                >
                  {milestone.title}
                </h3>
                <StatusBadge status={milestone.status} className="mt-2" />
                {showSummary && (
                  <p className="mt-3 text-sm leading-relaxed text-steel">{milestone.summary}</p>
                )}
              </Wrapper>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
