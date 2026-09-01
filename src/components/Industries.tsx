import {
  BankIcon,
  FactoryIcon,
  GradCapIcon,
  HeartHandsIcon,
  LaptopIcon,
  ShieldHeartIcon,
} from "./icons";
import { industries } from "@/lib/content";

const iconMap = {
  bank: BankIcon,
  laptop: LaptopIcon,
  shield: ShieldHeartIcon,
  factory: FactoryIcon,
  grad: GradCapIcon,
  heart: HeartHandsIcon,
} as const;

export default function Industries() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="container-page container-inset grid gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2.25rem]">
            Industries
            <br />
            We Serve
          </h2>
          <p className="mt-5 max-w-[34ch] text-[13.5px] leading-[1.85] text-muted">
            Our solutions are tailored to meet the unique needs of businesses across diverse
            sectors.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 xl:grid-cols-6 xl:border-l xl:border-gold/35">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <li
                key={industry.label}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="flex flex-col items-center gap-4 px-3 text-center xl:border-r xl:border-gold/35 xl:last:border-r-0"
              >
                <Icon className="h-9 w-9 text-gold" />
                <span className="text-[13.5px] font-medium text-ink xl:whitespace-nowrap">{industry.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
