import type { CarSystem } from "@/types/content";
import { ImagePanel } from "@/components/ui/ImagePanel";

export function CarSystemCard({ system }: { system: CarSystem }) {
  return (
    <article className="group h-full border border-line bg-track">
      <ImagePanel
        asset={
          system.image ?? {
            alt: "",
            placeholder: `Car — ${system.name} detail`,
            variant: system.id === "data" ? "data" : "detail",
          }
        }
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/10] border-b border-line"
        imageClassName="transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="p-5 md:p-6">
        <p className="font-mono text-xs text-red-text">{system.number}</p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase">{system.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel">{system.short}</p>
      </div>
    </article>
  );
}
