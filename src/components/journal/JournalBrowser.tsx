"use client";

import { useState } from "react";
import type { Article, ArticleCategory } from "@/types/content";
import { cn } from "@/lib/cn";

/** Category filter. Cards are rendered on the server and passed in by slug. */
export function JournalBrowser({
  categories,
  articles,
  cards,
}: {
  categories: ArticleCategory[];
  articles: Pick<Article, "slug" | "category">[];
  cards: Record<string, React.ReactNode>;
}) {
  const [filter, setFilter] = useState<ArticleCategory | "All">("All");
  const visible = articles.filter((a) => filter === "All" || a.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((category) => {
          const count =
            category === "All"
              ? articles.length
              : articles.filter((a) => a.category === category).length;
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category)}
              className={cn(
                "flex min-h-10 items-center gap-2 border px-4 font-mono text-xs tracking-[0.14em] uppercase transition-colors",
                active
                  ? "border-red bg-red text-warm"
                  : "border-line-strong text-muted hover:border-warm/50 hover:text-warm",
              )}
            >
              {category}
              <span className={active ? "text-warm" : "text-dim"}>{count}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "story" : "stories"} shown
      </p>

      {visible.length > 0 ? (
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((article, index) => (
            <li
              key={article.slug}
              className={cn(index === 0 && filter === "All" && "md:col-span-2 lg:col-span-2")}
            >
              {cards[article.slug]}
            </li>
          ))}
          <li className="flex min-h-64 flex-col justify-end border border-dashed border-line-strong p-6">
            <p className="eyebrow text-dim">Next entry</p>
            <p className="mt-2 font-display text-2xl font-bold text-muted uppercase">
              More stories as we build
            </p>
            <p className="mt-2 text-sm text-steel">
              Updates from every step of the Road to the Grid.
            </p>
          </li>
        </ul>
      ) : (
        <div className="mt-10 border border-dashed border-line-strong p-10 text-center">
          <p className="font-display text-3xl font-bold uppercase">
            No {filter.toLowerCase()} stories yet
          </p>
          <p className="mt-2 text-steel">Check back as the team reaches new milestones.</p>
        </div>
      )}
    </div>
  );
}
