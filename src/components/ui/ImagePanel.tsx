import Image from "next/image";
import type { MediaAsset } from "@/types/content";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { cn } from "@/lib/cn";

/**
 * Photograph slot. Renders the real image when `asset.src` is set,
 * otherwise a designed placeholder labelled with the shot it expects.
 */
export function ImagePanel({
  asset,
  className,
  sizes = "100vw",
  priority = false,
  showLabel = true,
  imageClassName,
  children,
}: {
  asset: MediaAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showLabel?: boolean;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  const id = asset.placeholder.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className ?? "");
  return (
    <div className={cn(!positioned && "relative", "overflow-hidden bg-garage", className)}>
      <div className={cn("absolute inset-0", imageClassName)}>
        {asset.src ? (
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <PlaceholderArt variant={asset.variant} id={id} />
        )}
      </div>
      {!asset.src && showLabel && (
        <span className="absolute right-3 bottom-3 z-10 max-w-[80%] truncate font-mono text-[0.6rem] tracking-[0.12em] text-steel/80 uppercase">
          [ {asset.placeholder} ]
        </span>
      )}
      {children}
    </div>
  );
}
