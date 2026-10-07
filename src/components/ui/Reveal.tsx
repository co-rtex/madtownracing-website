"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Reveals descendants marked with `data-reveal` / `data-reveal-line` once the
 * block scrolls into view. Content is visible by default (no JS, reduced
 * motion, or already on screen); only blocks below the fold are "armed".
 * Toggles attributes directly so scrolling never re-renders React trees.
 */
export function Reveal({
  as,
  className,
  children,
  threshold = 0.2,
  id,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  threshold?: number;
  id?: string;
  "aria-labelledby"?: string;
}) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const show = () => node.setAttribute("data-visible", "true");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      // Next frame so CSS transitions keyed on data-visible still play.
      const frame = requestAnimationFrame(show);
      return () => cancelAnimationFrame(frame);
    }
    node.classList.add("reveal-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} id={id} className={className} data-visible="false" {...rest}>
      {children}
    </Tag>
  );
}
