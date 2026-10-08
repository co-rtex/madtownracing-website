import Image from "next/image";
import { brandAssets } from "@/content/brandAssets";
import { cn } from "@/lib/cn";

export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={brandAssets.wordmark}
        alt="MadTown Racing"
        width={320}
        height={75}
        unoptimized
        className={cn(
          "h-auto object-contain object-left",
          compact ? "w-[10rem]" : "w-[12rem] sm:w-[13.5rem]",
        )}
      />
    </span>
  );
}
