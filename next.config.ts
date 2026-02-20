import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
