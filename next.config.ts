import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.eightheme.com",
        pathname: "/paramedic/**",
      },
      {
        protocol: "https",
        hostname: "reabilitar-em-casa.com",
      },
      {
        protocol: "https",
        hostname: "livrodeelogios.com",
      },
    ],
  },
};

export default nextConfig;
