"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/cn";

export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background lives on its own layer so backdrop-filter never traps the
          fixed mobile menu inside the header's containing block. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 border-b transition-[background-color,border-color] duration-300",
          scrolled
            ? "border-line bg-track/85 backdrop-blur-md"
            : "border-transparent bg-gradient-to-b from-track/80 to-transparent",
        )}
      />
      <div className="relative mx-auto flex h-[var(--header-h)] max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10 lg:px-16">
        <Link href="/" aria-label="MadTown Racing — home" className="shrink-0">
          <BrandMark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-3">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block px-3 py-2 font-display text-[0.92rem] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors",
                      active ? "text-warm" : "text-muted hover:text-warm",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-0.5 origin-left bg-red transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink href="/join" arrow className="min-h-10 px-5 text-[0.85rem]">
              Join the Team
            </ButtonLink>
          </span>
          <MobileNavigation pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
