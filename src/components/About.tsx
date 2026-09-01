import Image from "next/image";
import { images } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-green">
      <div className="grid w-full items-center lg:grid-cols-[1.05fr_1fr]">
        <div className="lg-inset-left-wide px-[calc(var(--page-gutter)+var(--page-gutter-extra))] py-16 lg:py-24 lg:pr-14">
          <h2 data-reveal="left" className="text-[2.2rem] font-semibold tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3rem]">
            About Us
          </h2>
          <p data-reveal="left" style={{ transitionDelay: "120ms" }} className="mt-6 max-w-[62ch] text-[15px] leading-[2] text-white/85 sm:text-[15.5px]">
            We are focused on developing people and unlocking talent to drive sustainable
            business growth, high performance, and organization effectiveness. Our people first
            approach ensures that organizations not only achieve their goals but also create
            meaningful experiences for their people.
          </p>
        </div>

        <div data-reveal="right" className="relative h-[300px] sm:h-[380px] lg:h-full lg:min-h-[400px]">
          {/* Gold wedge that separates the copy from the photograph */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-px z-10 hidden w-24 bg-gold lg:block"
            style={{ clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0 100%)" }}
          />
          <div
            className="relative h-full w-full overflow-hidden lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
          >
            <Image
              src={images.about}
              alt="AOME consultants working with a client team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
