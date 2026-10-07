import type { ElementType } from "react";
import { cn } from "@/lib/cn";

const sizes = {
  hero: "text-[clamp(3.6rem,10.5vw,9rem)]",
  xl: "text-[clamp(3rem,7.4vw,7rem)]",
  lg: "text-[clamp(2.6rem,5.6vw,5.25rem)]",
  md: "text-[clamp(2.1rem,3.8vw,3.5rem)]",
  sm: "text-[clamp(1.6rem,2.4vw,2.25rem)]",
};

export function DisplayHeading({
  as,
  size = "lg",
  className,
  children,
  id,
}: {
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  const Tag = as ?? "h2";
  return (
    <Tag id={id} className={cn("display", sizes[size], className)}>
      {children}
    </Tag>
  );
}

/** Red full stop used at the end of display headlines. */
export function RedStop() {
  return <span className="text-red">.</span>;
}
