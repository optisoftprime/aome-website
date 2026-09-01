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
import { images, site, socials } from "@/lib/content";

const socialIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

type ContactLine = { text: string; href?: string };

const details: {
  icon: typeof MapPinIcon;
  label: string;
  lines: ContactLine[];
}[] = [
  {
    icon: MapPinIcon,
    label: "Address",
    lines: [{ text: site.address }],
  },
  {
    icon: MailIcon,
    label: "Email",
    lines: [
      { text: site.email, href: `mailto:${site.email}` },
      { text: site.emailAlt, href: `mailto:${site.emailAlt}` },
    ],
  },
  {
    icon: PhoneIcon,
    label: "Phone Number",
    lines: [{ text: site.phone, href: `tel:${site.phone}` }],
  },
  {
    icon: GlobeIcon,
    label: "Website",
    lines: [{ text: site.website, href: `https://${site.website}` }],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-mint py-20 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub mt-2">Let&apos;s Build a Stronger Workforce Together</p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-12">
          <ul className="min-w-0 space-y-8 lg:pl-12 xl:pl-18">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <li key={detail.label} className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green text-white sm:h-13 sm:w-13">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[15.5px] font-semibold text-ink sm:text-[17px]">{detail.label}</h3>
                    {detail.lines.map((line) => (
                      <p key={line.text} className="text-[14px] leading-[1.75] break-words text-muted sm:text-[15.5px]">
                        {line.href ? (
                          <a href={line.href} className="hover:text-gold">
                            {line.text}
                          </a>
                        ) : (
                          line.text
                        )}
                      </p>
                    ))}
                  </div>
                </li>
              );
            })}

            {/* Indent by the icon column (circle + gap) so it lines up with the labels above */}
            <li className="pl-14 sm:pl-17">
              <h3 className="text-[15.5px] font-semibold text-ink sm:text-[17px]">Socials</h3>
              <ul className="mt-3 flex items-center gap-2.5">
                {socials.map((social) => {
                  const Icon = socialIcons[social.key];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-green text-white transition-colors hover:bg-gold"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>

          <div className="relative flex justify-center lg:block">
            <Image
              src={images.contact}
              alt="An AOME people solutions consultant on a support call"
              width={1528}
              height={1374}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full max-w-[420px] object-contain sm:max-w-[520px] lg:ml-auto lg:max-w-[820px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
