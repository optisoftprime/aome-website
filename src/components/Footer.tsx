import Image from "next/image";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "./icons";
import { quickLinks, site, socials } from "@/lib/content";
import SubscribeForm from "./SubscribeForm";

const socialIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

const contactRows = [
  { icon: MapPinIcon, text: site.address },
  { icon: MailIcon, text: site.email, href: `mailto:${site.email}` },
  { icon: PhoneIcon, text: site.phone, href: `tel:${site.phone}` },
  { icon: GlobeIcon, text: site.website, href: `https://${site.website}` },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-green text-white">
      <div className="container-page container-inset grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr_1.05fr] lg:gap-12">
        <div>
          <Image
            src={site.logo}
            alt={site.name}
            width={220}
            height={220}
            className="h-16 w-16 rounded-lg bg-white object-contain p-1"
          />
          <p className="mt-5 max-w-[30ch] text-[13px] leading-[1.85] text-white/75">
            Developing people and unlocking Talents for sustainable business growth and
            organizational excellence
          </p>
          <ul className="mt-5 flex items-center gap-2.5">
            {socials.map((social) => {
              const Icon = socialIcons[social.key];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-dark"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-[16px] font-semibold">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-white/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[16px] font-semibold">Contact Us</h2>
          <ul className="mt-5 space-y-3.5">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/90 text-green">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="max-w-[24ch] break-words text-[13px] leading-[1.6] text-white/75 transition-colors hover:text-gold"
                    >
                      {row.text}
                    </a>
                  ) : (
                    <span className="text-[13px] leading-[1.6] text-white/75">{row.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="max-w-[16ch] text-[16px] font-semibold leading-snug">
            Subscribe to Our Insights
          </h2>
          <p className="mt-3 text-[13px] leading-[1.75] text-white/75">
            Get the latest HR and people management tips, trends, and insights.
          </p>
          <SubscribeForm />
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="container-page container-inset py-6 text-[12.5px] text-white/65">
          &copy; 2026 AOME People Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
