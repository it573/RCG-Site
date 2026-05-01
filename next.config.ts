import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reabilitar-em-casa.com",
      },
      {
        protocol: "https",
        hostname: "livrodeelogios.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/fisioterapia-ao-domicilio",
        destination: "/cuidados-de-saude",
        permanent: true,
      },
      {
        source: "/apoio-ao-domicilio",
        destination: "/apoio-domicilio",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
