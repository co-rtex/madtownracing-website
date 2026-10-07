import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

/** Links to the application form, or a designed fallback when none exists. */
export function ApplyCta({ compact = false }: { compact?: boolean }) {
  if (siteConfig.joinUrl) {
    return (
      <ButtonLink href={siteConfig.joinUrl} arrow>
        I&rsquo;m Interested
      </ButtonLink>
    );
  }
  return (
    <div className={compact ? "" : "border border-dashed border-line-strong p-5"}>
      <p className="flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase">
        <span aria-hidden="true" className="anim-pulse size-1.5 bg-warning" />
        Application link coming soon
      </p>
      <p className="mt-1 text-sm text-steel">
        Follow{" "}
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm underline decoration-red underline-offset-4 hover:text-red-text"
        >
          {siteConfig.instagramHandle}
          <span className="sr-only"> on Instagram (opens in a new tab)</span>
        </a>{" "}
        for recruiting updates.
      </p>
    </div>
  );
}
