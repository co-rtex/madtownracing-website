import type { Article, ArticleCategory } from "@/types/content";

export const articleCategories: ArticleCategory[] = [
  "Team",
  "Technical",
  "Data",
  "Build",
  "Partners",
  "Race",
];

/**
 * Journal articles. Structured so a future MDX/CMS source can return the
 * same shape. Set `draft: true` to keep an article out of production.
 */
const allArticles: Article[] = [
  {
    slug: "why-we-are-building-madtown-racing",
    title: "Why We're Building MadTown Racing",
    excerpt:
      "Real wheel-to-wheel racing, run by students. Why we're starting a race team in Madison — and what it will take to reach the grid.",
    category: "Team",
    cover: {
      alt: "",
      placeholder: "Journal cover — team formation",
      variant: "team",
    },
    body: [
      {
        paragraphs: [
          "MadTown Racing exists because we believe students should be able to experience real motorsport — not a simulation of it, and not only from the grandstand.",
          "We are a student-operated collegiate motorsports organization in Madison preparing to compete wheel-to-wheel in the Collegiate Racing Series, on the Mazda MX-5 platform.",
        ],
      },
      {
        heading: "More than a driver",
        paragraphs: [
          "A race car on track is the visible part of a much larger effort. Behind it are engineers reading data, crew members rehearsing pit stops, people planning logistics, building partnerships, managing a budget, and telling the story.",
          "That's why MadTown Racing is open to students from every background. You do not need prior racing experience to contribute — you need curiosity and commitment.",
        ],
      },
      {
        heading: "Starting from zero",
        paragraphs: [
          "We're being honest about where we are: at the beginning. Our Road to the Grid lays out the steps — forming the team, securing funding, acquiring the car, licensing drivers, testing, and finally racing.",
          "We'll document every step here in the Paddock Journal.",
        ],
      },
      {
        heading: "Get involved",
        paragraphs: [
          "If you want to be part of building a race team, find your role on our Join page. If your organization wants to help put a student team on the grid, we'd like to talk.",
        ],
      },
    ],
  },
];

export const articles: Article[] = allArticles.filter(
  (article) => !article.draft || process.env.NODE_ENV !== "production",
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
