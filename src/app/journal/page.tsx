import { JournalBrowser } from "@/components/journal/JournalBrowser";
import { JournalCard } from "@/components/journal/JournalCard";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { articleCategories, articles } from "@/content/journal";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Paddock Journal",
  description: "Stories, updates, and behind-the-scenes progress from MadTown Racing.",
  path: "/journal",
});

export default function JournalPage() {
  const cards = Object.fromEntries(
    articles.map((article, index) => [
      article.slug,
      <JournalCard key={article.slug} article={article} featured={index === 0} />,
    ]),
  );
  return (
    <>
      <section aria-labelledby="page-heading" className="border-b border-line">
        <Container className="pt-[calc(var(--header-h)+4rem)] pb-12 md:pb-16">
          <SectionLabel className="anim-fade">Journal</SectionLabel>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1
                id="page-heading"
                className="anim-rise display text-[clamp(3.4rem,8.4vw,8.25rem)]"
              >
                Paddock
                <br />
                journal<span className="text-red">.</span>
              </h1>
              <p className="anim-rise mt-6 max-w-xl text-lg text-muted [animation-delay:120ms]">
                Stories, updates, and behind-the-scenes progress from MadTown Racing.
              </p>
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="anim-fade self-start border border-line-strong px-5 py-3 font-mono text-xs tracking-[0.14em] text-muted uppercase hover:border-warm hover:text-warm md:self-auto"
            >
              Daily updates on {siteConfig.instagramHandle} ↗
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </Container>
      </section>
      <section aria-label="Stories" className="py-12 md:py-16 lg:py-20">
        <Container>
          <JournalBrowser
            categories={articleCategories}
            articles={articles.map(({ slug, category }) => ({
              slug,
              category,
            }))}
            cards={cards}
          />
        </Container>
      </section>
    </>
  );
}
