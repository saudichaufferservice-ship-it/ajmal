import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saudichauffeurservice.com',
      }
    ],
  },
};

export default nextConfig;
