import { Icon } from "@/components/ui/Icon";
import { partnerBenefits } from "@/content/partners";

export function BenefitGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-px border border-line bg-line xs:grid-cols-2 lg:grid-cols-4">
      {partnerBenefits.map((benefit, index) => (
        <li key={benefit.id} className="group relative bg-track p-6 md:p-8">
          <div className="flex items-start justify-between">
            <Icon name={benefit.icon} className="size-7 text-warm" />
            <span className="font-mono text-xs text-dim">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-8 font-display text-3xl font-bold uppercase">{benefit.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">{benefit.description}</p>
          {detailed && (
            <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
              {benefit.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase"
                >
                  <span aria-hidden="true" className="h-px w-3 bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100"
          />
        </li>
      ))}
    </ul>
  );
}
