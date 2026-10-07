import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBand } from "@/components/layout/CtaBand";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { articles, getArticle } from "@/content/journal";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    ...pageMetadata({
      title: article.title,
      description: article.excerpt,
      path: `/journal/${article.slug}`,
    }),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/journal/${article.slug}`,
    },
  };
}

export default function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  return (
    <>
      <Suspense fallback={<div className="min-h-[80svh]" aria-busy="true" />}>
        <ArticleBody params={params} />
      </Suspense>
      <CtaBand
        eyebrow="Be part of the story"
        title={
          <>
            Help build it<span className="text-red">.</span>
          </>
        }
        primary={{ label: "Join the Team", href: "/join" }}
        secondary={{ label: "Partner with Us", href: "/partners" }}
      />
    </>
  );
}

async function ArticleBody({ params }: Pick<PageProps<"/journal/[slug]">, "params">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article>
      <header className="border-b border-line">
        <Container className="pt-[calc(var(--header-h)+3rem)] pb-10">
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-steel uppercase hover:text-warm"
          >
            <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" /> Paddock
            Journal
          </Link>
          <p className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.14em] uppercase">
            <span className="text-red-text">{article.category}</span>
            {article.date && (
              <time dateTime={article.date} className="text-steel">
                {formatDate(article.date)}
              </time>
            )}
            {article.author && <span className="text-steel">By {article.author}</span>}
          </p>
          <h1 className="display mt-4 max-w-5xl text-[clamp(2.8rem,6.4vw,6rem)]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{article.excerpt}</p>
        </Container>
      </header>
      <Container>
        <ImagePanel
          asset={article.cover}
          priority
          sizes="100vw"
          className="mt-10 aspect-[21/9] border border-line"
        />
        <div className="mx-auto max-w-[68ch] py-12 md:py-16">
          {article.body.map((block, index) => (
            <section key={index} className="mt-10 first:mt-0">
              {block.heading && (
                <h2 className="font-display text-3xl font-bold uppercase">{block.heading}</h2>
              )}
              {block.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-lg leading-relaxed text-muted first:mt-3"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
