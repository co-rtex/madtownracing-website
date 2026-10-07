import { ButtonLink } from "@/components/ui/Button";
import { leadershipRole, departments } from "@/content/team";

/** Shown until real, consenting members are added to content/team.ts. */
export function RosterComingSoon() {
  const seats = [leadershipRole.name, ...departments.map((d) => `${d.name} Lead`)];
  return (
    <div className="border border-line-strong">
      <div className="grid gap-8 p-6 md:grid-cols-12 md:p-10">
        <div className="md:col-span-5">
          <p className="eyebrow flex items-center gap-2 text-warning">
            <span aria-hidden="true" className="anim-pulse size-1.5 bg-warning" />
            Recruiting founding members
          </p>
          <h3 className="display mt-4 text-[clamp(2.4rem,4.4vw,4rem)]">
            Team roster
            <br />
            coming soon<span className="text-red">.</span>
          </h3>
          <p className="mt-4 max-w-md text-muted">
            We&rsquo;re forming the founding team now. Every seat below is open — and the people who
            fill them will shape how MadTown Racing works for years.
          </p>
          <ButtonLink href="/join" arrow className="mt-8">
            Claim a Seat
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:col-span-7">
          {seats.map((seat, index) => (
            <li
              key={seat}
              className="relative flex min-h-32 flex-col justify-end border border-dashed border-line-strong bg-pit p-4 sm:aspect-[4/3]"
            >
              <span aria-hidden="true" className="absolute top-4 left-4 font-mono text-xs text-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="absolute top-4 right-4 hidden size-12 rounded-full border border-line-strong sm:block md:size-16"
              />
              <span className="font-display text-xl leading-tight font-bold uppercase">{seat}</span>
              <span className="mt-1 font-mono text-[0.65rem] tracking-widest text-steel uppercase">
                Open seat
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
