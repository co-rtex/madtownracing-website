import { getSiteUrl, siteConfig } from "@/content/site";

/** Organization structured data — only facts the team has confirmed. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: getSiteUrl(),
    sport: "Motorsport",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madison",
        addressRegion: "WI",
        addressCountry: "US",
      },
    },
    sameAs: [siteConfig.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
