import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-red text-warm hover:bg-red-dark border border-red hover:border-red-dark",
  secondary: "border border-warm/60 text-warm hover:border-warm hover:bg-warm hover:text-track",
  /** Outline button for light (warm-white) backgrounds. */
  inverse: "border border-track/60 text-track hover:border-track hover:bg-track hover:text-warm",
  ghost: "text-warm hover:text-red-text px-0! border-0",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  arrow?: boolean | "up-right";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** Square-cornered motorsport CTA. External links open in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  external,
  className,
  children,
}: ButtonLinkProps) {
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 px-6 font-display text-[0.95rem] font-bold tracking-[0.08em] uppercase transition-colors duration-200",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Arrow
          direction={arrow === "up-right" ? "up-right" : "right"}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
        {newTab && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
