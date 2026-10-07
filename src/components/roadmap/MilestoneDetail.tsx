import Link from "next/link";
import type { Milestone } from "@/types/content";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getArticle } from "@/content/journal";
import { cn } from "@/lib/cn";

export function MilestoneDetail({ milestone }: { milestone: Milestone }) {
  const related = (milestone.articles ?? []).map(getArticle).filter((a) => a !== undefined);
  const muted = milestone.status === "upcoming";
  return (
    <article
      id={`milestone-${milestone.number}`}
      aria-labelledby={`milestone-${milestone.number}-title`}
      className={cn(
        "grid scroll-mt-28 gap-6 border-t py-10 md:grid-cols-12 md:py-14",
        milestone.status === "active" ? "border-red" : "border-line",
      )}
    >
      <div className="md:col-span-3">
        <span
          className={cn(
            "font-display text-[clamp(4rem,8vw,7rem)] leading-[0.8] font-black",
            muted
              ? "text-transparent [-webkit-text-stroke:1px_rgb(244_242_236/0.25)]"
              : "text-warm",
          )}
        >
          {milestone.number}
        </span>
      </div>
      <div className="md:col-span-9 lg:col-span-6">
        <StatusBadge status={milestone.status} />
        <h3
          id={`milestone-${milestone.number}-title`}
          className={cn("display mt-3 text-[clamp(2.2rem,4vw,3.5rem)]", muted && "text-muted")}
        >
          {milestone.title}
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{milestone.summary}</p>
        <p className="mt-4 font-mono text-xs tracking-wider text-steel uppercase">
          {milestone.date ? `Date — ${milestone.date}` : "Date — To be confirmed"}
        </p>
        {milestone.notes && milestone.notes.length > 0 && (
          <div className="mt-6">
            <h4 className="eyebrow text-dim">Progress notes</h4>
            <ul className="mt-3 space-y-2">
              {milestone.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm text-muted">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-red" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}
        {milestone.gallery && milestone.gallery.length > 0 && (
          <ul className="mt-6 grid grid-cols-3 gap-2">
            {milestone.gallery.map((image) => (
              <li key={image.placeholder}>
                <ImagePanel asset={image} sizes="20vw" className="aspect-square" />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="md:col-span-9 md:col-start-4 lg:col-span-3 lg:col-start-auto">
        {related.length > 0 && (
          <>
            <h4 className="eyebrow text-dim">From the journal</h4>
            <ul className="mt-3 space-y-2">
              {related.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="group block border border-line p-4 transition-colors hover:border-warm/40"
                  >
                    <span className="font-mono text-[0.65rem] tracking-widest text-red-text uppercase">
                      {article.category}
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight font-bold uppercase group-hover:text-red-text">
                      {article.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
