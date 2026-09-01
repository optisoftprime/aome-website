"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { QuoteIcon } from "./icons";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  /* Keep the dots in sync with wherever the user has scrolled the track. */
  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 16;
    setIndex(Math.round(track.scrollLeft / step));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncIndex, { passive: true });
    return () => track.removeEventListener("scroll", syncIndex);
  }, [syncIndex]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollTo({ left: i * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-sub mt-2">Read through our client&apos;s testimonial</p>
        </div>

        <ul
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl bg-cream-card px-8 py-8 sm:w-[60%] lg:w-auto"
            >
              <QuoteIcon className="h-7 w-7 text-gold" />
              <p className="mt-4 text-[14px] leading-[1.85] text-ink/85">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3.5">
                <Image
                  src={item.avatar}
                  alt=""
                  width={200}
                  height={200}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-semibold text-ink">-{item.name}</p>
                  <p className="text-[11.5px] text-muted">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex items-center justify-center gap-2.5">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
