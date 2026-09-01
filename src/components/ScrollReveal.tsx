"use client";

import { useEffect } from "react";

/**
 * Mounted once for the whole page. Anything marked with `data-reveal` fades and
 * lifts into place the first time it scrolls into view — no wrapper elements, so
 * grid and flex layouts are untouched.
 *
 * The hidden state lives behind `prefers-reduced-motion: no-preference` in
 * globals.css, and a <noscript> rule there keeps content visible without JS.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
