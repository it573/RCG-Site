import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.eightheme.com",
        pathname: "/paramedic/**",
      },
    ],
  },
};

export default nextConfig;
