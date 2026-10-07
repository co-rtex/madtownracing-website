import Link from "next/link";
import type { Article } from "@/types/content";
import { Arrow } from "@/components/ui/Arrow";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { formatDate } from "@/lib/date";

export function JournalCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article className="group relative h-full border border-line bg-pit transition-colors hover:border-warm/40">
      <ImagePanel
        asset={article.cover}
        sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        className={featured ? "aspect-[16/9] lg:aspect-[16/8]" : "aspect-[16/10]"}
        imageClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="p-5 md:p-6">
        <p className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          <span className="text-red-text">{article.category}</span>
          {article.date && (
            <time dateTime={article.date} className="text-steel">
              {formatDate(article.date)}
            </time>
          )}
          {article.draft && <span className="text-warning">Draft</span>}
        </p>
        <h3
          className={`mt-3 font-display leading-[1.05] font-bold uppercase ${featured ? "text-[clamp(2rem,3.4vw,3rem)]" : "text-2xl"}`}
        >
          <Link
            href={`/journal/${article.slug}`}
            className="group-hover:text-red-text after:absolute after:inset-0"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">{article.excerpt}</p>
        <span
          aria-hidden="true"
          className="mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.14em] text-muted uppercase group-hover:text-warm"
        >
          Read story <Arrow className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
