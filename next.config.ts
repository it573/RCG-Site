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
      // Google Ads (Fisioterapia - CRESTANADS) points at /cuidados-de-saude; send ad clicks
      // (identified by Google's click ids) to the physiotherapy landing page. Organic visits are untouched.
      ...["gclid", "gbraid", "wbraid"].map((key) => ({
        source: "/cuidados-de-saude",
        has: [{ type: "query" as const, key }],
        destination: "/fisioterapia-no-domicilio",
        permanent: false,
      })),
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
      {
        source: "/apoio-domiciliario",
        destination: "/apoio-domicilio",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
