"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { Arrow } from "@/components/ui/Arrow";
import { mainNav, siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

const links = [...mainNav, { label: "Join the Team", href: "/join" }];

export function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center border border-line-strong"
      >
        <span className="sr-only">Open menu</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
          <span className="h-px w-full bg-warm" />
          <span className="h-px w-3/4 self-end bg-red" />
          <span className="h-px w-full bg-warm" />
        </span>
      </button>

      <div
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
        className="fixed inset-0 z-[60] overflow-y-auto bg-track"
      >
        <div
          className="tech-grid pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
        />
        <div className="relative flex min-h-full flex-col px-6 pb-10 md:px-10">
          <div className="flex h-[var(--header-h)] items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} aria-label="MadTown Racing — home">
              <BrandMark />
            </Link>
            <button
              type="button"
              onClick={close}
              className="flex size-11 items-center justify-center border border-line-strong"
            >
              <span className="sr-only">Close menu</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-4"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="m2 2 12 12M14 2 2 14" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex-1">
            <ol className="border-t border-line">
              {links.map((item, index) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const isJoin = item.href === "/join";
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn("group flex items-center gap-5 py-4", open && "anim-rise")}
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <span
                        className={cn("font-mono text-xs", active ? "text-red-text" : "text-dim")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "display flex-1 text-[clamp(2rem,9vw,3.25rem)]",
                          isJoin ? "text-red" : active ? "text-warm" : "text-muted",
                        )}
                      >
                        {item.label}
                      </span>
                      <Arrow className={cn("size-5", isJoin ? "text-red" : "text-steel")} />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-[0.14em] text-steel uppercase">
            <span>{siteConfig.locationShort}</span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm"
            >
              {siteConfig.instagramHandle} ↗<span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
