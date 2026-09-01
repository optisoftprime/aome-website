import { ContactButton } from "./ContactModal";
import { UsersIcon } from "./icons";

export default function CtaBand() {
  return (
    <section className="my-12 bg-green lg:my-16">
      <div className="container-page flex flex-col items-stretch gap-6 py-9 sm:py-10 md:flex-row md:items-center md:justify-between md:gap-8 md:py-11">
        <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
          <UsersIcon className="h-9 w-9 shrink-0 text-gold sm:h-11 sm:w-11" />
          <div className="min-w-0">
            <h2 className="text-[16.5px] font-semibold leading-snug text-white sm:text-[18px] lg:text-[20px]">
              Ready to Build a Stronger Team?
            </h2>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/75 sm:text-[13.5px]">
              Partner with us to unlock the full potential of your people and business.
            </p>
          </div>
        </div>

        {/* Full width while stacked so it reads as the section's action, auto width once inline */}
        <ContactButton className="inline-flex shrink-0 items-center justify-center rounded-md bg-gold px-7 py-3.5 text-center text-[13.5px] font-medium text-white transition-colors hover:bg-gold-dark max-w-[420px] sm:text-[14.5px] md:max-w-none md:self-auto">
          Get in Touch Today
        </ContactButton>
      </div>
    </section>
  );
}
