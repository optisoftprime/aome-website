/**
 * Every string, link and image path used on the page.
 * Swap the `images` values here once the real photography is exported.
 */

/**
 * Formspree form ID - the part after /f/ in your endpoint
 * (https://formspree.io/f/XXXXXXXX). Override with NEXT_PUBLIC_FORMSPREE_ID.
 */
export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";

export const site = {
  name: "AOME People Solutions",
  logo: "/images/logo.png",
  email: "azeezat@aomepeoplesolutions.com",
  emailAlt: "sales@aomepeoplesolution.com",
  phone: "+2349018239707",
  website: "www.aomepeoplesolutions.com",
  address: "Lagos, Nigeria",
};

export const images = {
  hero: "/images/heroimg.png",
  heroBg: "/images/herobg.png",
  about: "/images/aboutimg.png",
  contact: "/images/contactimg.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export const socials = [
  { label: "Facebook", href: "#", key: "facebook" as const },
  { label: "X", href: "#", key: "x" as const },
  { label: "LinkedIn", href: "#", key: "linkedin" as const },
  { label: "Instagram", href: "#", key: "instagram" as const },
];

export const services = [
  {
    title: "Talent\nAcquisition",
    body: "Attracting and securing the right talent for your business.",
  },
  {
    title: "Talent\nDevelopment",
    body: "Nurturing skills and capabilities for future success.",
  },
  {
    title: "Organizational\nDevelopment",
    body: "Building stronger structures and healthier work places.",
  },
  {
    title: "Performance\nManagement",
    body: "Driving accountability and continuous improvement.",
  },
  {
    title: "Learning &\nDevelopment",
    body: "Equipping people with the knowledge and skills to grow.",
  },
];

export const reasons = [
  {
    icon: "users" as const,
    title: "People First Approach",
    body: "Your People are your greatest asset - We help you unlock their full potential",
  },
  {
    icon: "bulb" as const,
    title: "Strategic & Tailored Solution",
    body: "Your People are your greatest asset - We help you unlock their full potential",
  },
  {
    icon: "chart" as const,
    title: "Measurable Impact",
    body: "Visible improvements in performance, culture and business growth.",
  },
  {
    icon: "handshake" as const,
    title: "Trusted Partnership",
    body: "A long term partner in your people and organizational success journey.",
  },
];

export const industries = [
  { icon: "bank" as const, label: "Financial Services" },
  { icon: "laptop" as const, label: "Technology" },
  { icon: "shield" as const, label: "HealthCare" },
  { icon: "factory" as const, label: "Manufacturing" },
  { icon: "grad" as const, label: "Education" },
  { icon: "heart" as const, label: "Non-Profit" },
];

export const testimonials = [
  {
    quote:
      "AOME people's solution transformed our HR approach and helped us build a more engaged and productive team.",
    name: "Sarah Okagbulor",
    role: "HR Manager, Financial Services",
    avatar: "/images/avatar1.png",
  },
  {
    quote:
      "Their talent development programmes have significantly improved the skills and confidence of our workforce.",
    name: "Emeka Anya",
    role: "Operations Director, Tech Company",
    avatar: "/images/avatar2.png",
  },
  {
    quote:
      "AOME people's solution transformed our HR approach and helped us build a more engaged and productive team.",
    name: "Chidinma Eze",
    role: "CEO, Health Care Organization",
    avatar: "/images/avatar3.png",
  },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];
