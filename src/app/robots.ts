import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.reabilitar-em-casa.com";

  return {
    rules: [
      {
        userAgent: "*", // Apply to all search engines
        allow: "/", // Allow crawling everything
        disallow: ["/api/"], // But block API routes (no SEO value)
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Reference to sitemap
  };
}
