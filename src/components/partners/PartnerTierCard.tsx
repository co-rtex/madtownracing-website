import type { PartnerTier } from "@/types/content";
import { cn } from "@/lib/cn";

export function PartnerTierCard({
  tier,
  index,
  featured,
}: {
  tier: PartnerTier;
  index: number;
  featured?: boolean;
}) {
  return (
    <article className={cn("flex h-full flex-col p-6", featured ? "bg-warm text-track" : "bg-pit")}>
      <span className={cn("font-mono text-xs", featured ? "text-red-dark" : "text-red-text")}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-2xl leading-tight font-bold uppercase">{tier.name}</h3>
      <p className={cn("mt-3 text-sm leading-relaxed", featured ? "text-pit-gray" : "text-steel")}>
        {tier.summary}
      </p>
    </article>
  );
}
