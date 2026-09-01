import { UsersIcon } from "./icons";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-mint py-20 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub mt-2">
            End-to-end people&apos;s solutions for a thriving organization.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col items-center rounded-xl border border-line bg-white px-6 pb-9 pt-9 text-center transition-shadow hover:shadow-[0_10px_30px_-18px_rgba(16,64,31,0.45)]"
            >
              <UsersIcon className="h-10 w-10 text-gold" />
              <h3 className="mt-5 whitespace-pre-line text-[18px] font-semibold leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-4 mb-8 text-[13.5px] leading-[1.75] text-muted">{service.body}</p>
              <span className="card-rule mt-auto" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
