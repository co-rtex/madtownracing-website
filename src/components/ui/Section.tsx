import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "track" | "garage" | "pit";
  spacing?: "default" | "tight" | "none";
  divider?: boolean;
};

const tones = {
  track: "bg-track",
  garage: "bg-garage",
  pit: "bg-pit",
};

const spacings = {
  default: "py-14 md:py-20 lg:py-28",
  tight: "py-10 md:py-14 lg:py-16",
  none: "",
};

export function Section({
  tone = "track",
  spacing = "default",
  divider = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        tones[tone],
        spacings[spacing],
        divider && "border-t border-line",
        className,
      )}
      {...props}
    />
  );
}
