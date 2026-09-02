import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: noticeably smaller than WebP on these photographs
    formats: ["image/avif", "image/webp"],
    // Sources are pre-sized, so there is nothing to gain above 1920
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
