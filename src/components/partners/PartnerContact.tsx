import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

/** Partnership contact options, degrading gracefully when details are missing. */
export function PartnerContact() {
  // Single switch: set `sponsorEmail` in content/site.ts to replace the
  // Instagram fallback with a "Contact the Team" email button.
  const email = siteConfig.sponsorEmail;
  const hasDeck = Boolean(siteConfig.sponsorDeckUrl);

  return (
    <div className="grid gap-px border border-line-strong bg-line md:grid-cols-2">
      <div className="bg-pit p-6 md:p-10">
        <p className="eyebrow text-dim">01 — Partnership deck</p>
        {hasDeck ? (
          <>
            <p className="mt-4 font-display text-3xl font-bold uppercase">
              Request partnership deck
            </p>
            <p className="mt-2 text-steel">Our goals, audience, and partnership opportunities.</p>
            <ButtonLink href={siteConfig.sponsorDeckUrl} arrow className="mt-6">
              Download Deck
            </ButtonLink>
          </>
        ) : (
          <>
            <p className="mt-4 font-display text-3xl font-bold uppercase">Deck in preparation</p>
            <p className="mt-2 text-steel">
              Our partnership deck is being finalized. Contact the team and we&rsquo;ll send it as
              soon as it&rsquo;s ready.
            </p>
          </>
        )}
      </div>
      <div className="bg-pit p-6 md:p-10">
        <p className="eyebrow text-dim">02 — Contact the team</p>
        {email ? (
          <>
            <p className="mt-4 font-display text-3xl font-bold uppercase">Talk to us</p>
            <p className="mt-2 text-steel">
              Tell us about your organization and what you&rsquo;d like to achieve.
            </p>
            <ButtonLink
              href={`mailto:${email}?subject=MadTown%20Racing%20partnership`}
              arrow
              className="mt-6"
            >
              Contact the Team
            </ButtonLink>
          </>
        ) : (
          <>
            <p className="mt-4 font-display text-3xl font-bold uppercase">
              Message us on Instagram
            </p>
            <p className="mt-2 text-steel">
              A dedicated partnerships email is coming soon. Until then, send a direct message to{" "}
              {siteConfig.instagramHandle} and the business team will follow up.
            </p>
            <ButtonLink
              href={siteConfig.instagram}
              arrow="up-right"
              variant="secondary"
              className="mt-6"
            >
              Message {siteConfig.instagramHandle}
            </ButtonLink>
          </>
        )}
      </div>
    </div>
  );
}
