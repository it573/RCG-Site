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
  async rewrites() {
    // Proxy the Salesforce Sites client form so it is served under our domain.
    // The Visualforce page loads assets and posts back to /cliente/* and /apexpages/*.
    const salesforceSite = "https://reabilitaremcasa.my.salesforce-sites.com";
    return {
      beforeFiles: [
        { source: "/cliente", destination: `${salesforceSite}/cliente` },
        { source: "/cliente/:path*", destination: `${salesforceSite}/cliente/:path*` },
        { source: "/apexpages/:path*", destination: `${salesforceSite}/apexpages/:path*` },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default withNextIntl(nextConfig);
