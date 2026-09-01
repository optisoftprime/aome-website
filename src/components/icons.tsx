import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Line icons are drawn on a 24x24 grid and inherit colour from the parent. */
function Line({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* Group of three people — used for every service card and the CTA band. */
export function UsersIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="12" cy="6.2" r="2.6" />
      <path d="M8 14.4a4.2 4.2 0 0 1 8 0" />
      <circle cx="4.9" cy="9.4" r="2" />
      <path d="M1.6 16.4a3.4 3.4 0 0 1 4.5-3.2" />
      <circle cx="19.1" cy="9.4" r="2" />
      <path d="M22.4 16.4a3.4 3.4 0 0 0-4.5-3.2" />
    </Line>
  );
}

export function BulbIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M9.2 16.4a6 6 0 1 1 5.6 0v2a1.4 1.4 0 0 1-1.4 1.4h-2.8a1.4 1.4 0 0 1-1.4-1.4Z" />
      <path d="M9.6 17.6h4.8" />
      <path d="M11 21.6h2" />
    </Line>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M3.6 20.4h16.8" />
      <path d="M6.8 20.4v-5.6" />
      <path d="M12 20.4V9.2" />
      <path d="M17.2 20.4V4.4" />
    </Line>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M2.6 9.6 6.4 7l3.2 1.6 2.4-1 2.4 1L17.6 7l3.8 2.6" />
      <path d="M12 7.6v2.2" />
      <path d="M2.6 9.6l3.1 5.2a2 2 0 0 0 2.6.8L12 13.8l3.7 1.8a2 2 0 0 0 2.6-.8l3.1-5.2" />
      <path d="M12 13.8V18" />
    </Line>
  );
}

export function BankIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M3 9.6 12 4.4l9 5.2" />
      <path d="M4.6 9.6v8.8M9.5 9.6v8.8M14.5 9.6v8.8M19.4 9.6v8.8" />
      <path d="M2.8 19.6h18.4" />
    </Line>
  );
}

export function LaptopIcon(props: IconProps) {
  return (
    <Line {...props}>
      <rect x="4.2" y="5.4" width="15.6" height="10.2" rx="1.4" />
      <path d="M2.4 18.6h19.2" />
    </Line>
  );
}

export function ShieldHeartIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M12 3.2 5 5.9v5.4c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V5.9Z" />
      <path d="M12 15.2s-2.9-1.8-2.9-3.8a1.6 1.6 0 0 1 2.9-.9 1.6 1.6 0 0 1 2.9.9c0 2-2.9 3.8-2.9 3.8Z" />
    </Line>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M3.4 20.2V9.4l5.4 3.2V9.4l5.4 3.2V9.4l6.4 3.8v7Z" />
      <path d="M3.4 9.4V4.6h3.2v4.8" />
      <path d="M8.6 16.6h1.6M13.6 16.6h1.6" />
    </Line>
  );
}

export function GradCapIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M2.4 9.4 12 5.2l9.6 4.2L12 13.6Z" />
      <path d="M6.6 11.4v4.4c0 1.5 2.4 2.8 5.4 2.8s5.4-1.3 5.4-2.8v-4.4" />
      <path d="M21.6 9.4v5" />
    </Line>
  );
}

export function HeartHandsIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M12 9.4S9.8 7.9 9.8 6.2a1.6 1.6 0 0 1 2.2-1.4 1.6 1.6 0 0 1 2.2 1.4c0 1.7-2.2 3.2-2.2 3.2Z" />
      <path d="M12 12.2v9" />
      <path d="M12 14.2c-1.6-1.9-3.6-2.6-5.6-2.2" />
      <path d="M12 14.2c1.6-1.9 3.6-2.6 5.6-2.2" />
      <path d="M12 18.4c-1.6-1.9-3.6-2.6-5.6-2.2" />
      <path d="M12 18.4c1.6-1.9 3.6-2.6 5.6-2.2" />
    </Line>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M12 21.2s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Line>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Line {...props}>
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2" />
      <path d="m3.6 7 8.4 6 8.4-6" />
    </Line>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Line {...props}>
      <path d="M7.2 3.4h-.9a3 3 0 0 0-3 3.2c.4 8 6.5 14.1 14.5 14.5a3 3 0 0 0 3.2-3v-.9a1.5 1.5 0 0 0-1.1-1.4l-3-.8a1.5 1.5 0 0 0-1.6.6l-.9 1.3a12 12 0 0 1-6-6l1.3-.9a1.5 1.5 0 0 0 .6-1.6l-.8-3a1.5 1.5 0 0 0-1.4-1.1Z" />
    </Line>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Line {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </Line>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Line strokeWidth={2} {...props}>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5-5.5 5.5" />
    </Line>
  );
}

/* Solid brand marks — filled so they read correctly inside the small chips. */
export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.6V13h2.7v8Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.2 3.6h2.9l-6.35 7.26L21.4 20.4h-5.85l-4.58-5.99-5.24 5.99H2.83l6.79-7.77L2.6 3.6h6l4.14 5.47ZM16.18 18.66h1.61L7.9 5.25H6.17Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.9V20H3.5V8.9ZM5.22 3.6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM20.5 20h-3.44v-5.75c0-1.45-.52-2.44-1.8-2.44-.98 0-1.56.66-1.82 1.3-.09.23-.12.55-.12.87V20H9.88s.05-10.06 0-11.1h3.44v1.57c.46-.71 1.28-1.72 3.11-1.72 2.27 0 3.97 1.49 3.97 4.68Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2c2.67 0 2.99.01 4.04.06 1.05.05 1.76.22 2.39.46.65.25 1.2.59 1.75 1.14.55.55.89 1.1 1.14 1.75.24.63.41 1.34.46 2.39.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.22 1.76-.46 2.39a4.9 4.9 0 0 1-1.14 1.75c-.55.55-1.1.89-1.75 1.14-.63.24-1.34.41-2.39.46-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.76-.22-2.39-.46a4.9 4.9 0 0 1-1.75-1.14 4.9 4.9 0 0 1-1.14-1.75c-.24-.63-.41-1.34-.46-2.39C2.21 14.99 2.2 14.67 2.2 12s.01-2.99.06-4.04c.05-1.05.22-1.76.46-2.39.25-.65.59-1.2 1.14-1.75.55-.55 1.1-.89 1.75-1.14.63-.24 1.34-.41 2.39-.46C9.01 2.21 9.33 2.2 12 2.2Zm0 1.8c-2.62 0-2.93.01-3.96.06-.96.04-1.48.2-1.82.34-.46.18-.79.39-1.13.73-.34.34-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.05 1.03-.06 1.34-.06 3.96s.01 2.93.06 3.96c.04.96.2 1.48.34 1.82.18.46.39.79.73 1.13.34.34.67.55 1.13.73.34.14.86.3 1.82.34 1.03.05 1.34.06 3.96.06s2.93-.01 3.96-.06c.96-.04 1.48-.2 1.82-.34.46-.18.79-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.34.3-.86.34-1.82.05-1.03.06-1.34.06-3.96s-.01-2.93-.06-3.96c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 0 0-.73-1.13 3.1 3.1 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34C14.93 4.01 14.62 4 12 4Zm0 3.03a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94Zm0 1.8a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34Zm5.17-3.2a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.6 4.8 7.9 9.1h2.5v10.1H2.3V9.1L4.9 4.8Zm11.4 0-1.7 4.3h2.5v10.1h-8.1V9.1l2.6-4.3Z" />
    </svg>
  );
}
