"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactButton } from "./ContactModal";
import { ArrowRightIcon } from "./icons";
import { navLinks, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  /* Highlight the nav item for whichever section is under the header. */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line/70">
      <div className="container-page flex h-[72px] items-center justify-between gap-4 sm:h-20">
        <a href="#home" className="flex shrink-0 items-center" aria-label={site.name}>
          <Image src={site.logo} alt={site.name} width={220} height={220} priority className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-[15px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded bg-gold transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ContactButton className="hidden items-center gap-2 rounded-md bg-gold px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-gold-dark sm:inline-flex">
            Get in Touch
            <ArrowRightIcon className="h-4 w-4" />
          </ContactButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-full rounded bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-[var(--page-gutter)] py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-[15px] font-medium text-ink hover:bg-mint"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ContactButton className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[14.5px] font-medium text-white">
                Get in Touch
                <ArrowRightIcon className="h-4 w-4" />
              </ContactButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
