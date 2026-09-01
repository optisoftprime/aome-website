import { BulbIcon, ChartIcon, HandshakeIcon, UsersIcon } from "./icons";
import { reasons } from "@/lib/content";

const iconMap = {
  users: UsersIcon,
  bulb: BulbIcon,
  chart: ChartIcon,
  handshake: HandshakeIcon,
} as const;

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-sub mt-2">
            We don&apos;t just fill roles - We build people and stronger Organizations
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = iconMap[reason.icon];
            return (
              <li
                key={reason.title}
                className="flex flex-col items-center rounded-xl bg-cream-card px-8 pb-9 pt-9 text-center"
              >
                <Icon className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-[17px] font-semibold leading-snug text-ink">
                  {reason.title}
                </h3>
                <p className="mt-4 mb-8 text-[13px] leading-[1.8] text-muted">{reason.body}</p>
                <span className="card-rule mt-auto" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
