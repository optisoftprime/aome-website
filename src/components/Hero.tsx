import Image from "next/image";
import { ContactButton } from "./ContactModal";
import { ArrowRightIcon } from "./icons";
import { images } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f4f2ec]">
      {/* Office interior behind the whole band */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={images.heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim so the headline keeps its contrast over the busier left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/25" />
      </div>

      {/* Gold ribbon sweeping in behind the photograph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[52%] lg:block"
      >
        <div className="absolute right-[23%] top-[3%] h-[56%] w-[21%] rotate-[16deg] rounded-[44px] bg-gradient-to-b from-gold-soft via-gold to-gold/35" />
        <div className="absolute right-[47%] top-0 h-[40%] w-[11%] rotate-[12deg] rounded-[32px] bg-gradient-to-b from-gold/75 to-gold-soft/15" />
      </div>

      <div className="relative grid w-full items-center gap-8 lg:min-h-[720px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div className="lg-inset-left px-[var(--page-gutter)] pt-12 pb-10 lg:py-16 lg:pr-4">
          <h1 data-reveal="left" className="max-w-[17ch] text-[2.4rem] font-semibold leading-[1.14] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.95rem]">
            Building Stronger People.{" "}
            <span className="text-gold">Stronger Businesses.</span>
          </h1>

          <p data-reveal="left" style={{ transitionDelay: "120ms" }} className="mt-7 max-w-[48ch] text-[16px] leading-[1.85] text-muted">
            <span className="font-semibold text-ink">Aome People&apos;s Solution</span> is a
            people&apos;s-centric Human Resource and people advisory firm offering strategic
            solutions that develop talents, strengthen organizations and drive sustainable
            business growth.
          </p>

          <ContactButton data-reveal="left" style={{ transitionDelay: "240ms" }} className="mt-9 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-gold-dark">
            Partner with Us
            <ArrowRightIcon className="h-4 w-4" />
          </ContactButton>
        </div>

        {/* On large screens the photograph is taken out of the grid flow and pinned to the
            full height of the section, so the copy sits centred rather than being pushed
            down by the artwork. */}
        <div className="relative flex justify-center px-[var(--page-gutter)] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] lg:px-0">
          <Image
            src={images.hero}
            alt="The AOME People Solutions advisory team"
            width={1600}
            height={1552}
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="h-auto w-full max-w-[520px] object-contain object-bottom lg:h-full lg:max-w-none lg:object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}
