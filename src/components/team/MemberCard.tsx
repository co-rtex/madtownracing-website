import Image from "next/image";
import type { Member } from "@/types/content";
import { Arrow } from "@/components/ui/Arrow";

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group border border-line bg-pit">
      <div className="relative aspect-[4/5] overflow-hidden bg-garage">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div aria-hidden="true" className="tech-grid absolute inset-0" />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-bold uppercase">{member.name}</h3>
        <p className="text-sm text-red-text">{member.role}</p>
        <dl className="mt-4 space-y-1 font-mono text-[0.7rem] tracking-wider text-steel uppercase">
          {member.major && (
            <div className="flex gap-2">
              <dt className="sr-only">Major</dt>
              <dd>
                {member.major}
                {member.graduationYear && ` ’${String(member.graduationYear).slice(-2)}`}
              </dd>
            </div>
          )}
          {member.focus && (
            <div className="flex gap-2">
              <dt className="text-dim">Focus</dt>
              <dd>{member.focus}</dd>
            </div>
          )}
          {member.favoriteCircuit && (
            <div className="flex gap-2">
              <dt className="text-dim">Fav. circuit</dt>
              <dd>{member.favoriteCircuit}</dd>
            </div>
          )}
        </dl>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase hover:text-warm"
          >
            LinkedIn <Arrow direction="up-right" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
