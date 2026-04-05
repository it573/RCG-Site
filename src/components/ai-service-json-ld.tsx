// Service Schema for individual service pages
interface ServiceJsonLdProps {
  serviceName: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: string;
}

export function ServiceJsonLd({
  serviceName,
  description,
  url,
  price = "Contacte-nos",
  areaServed = "Portugal",
}: ServiceJsonLdProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    url: `https://new.reabilitar-em-casa.com${url}`,
    provider: {
      "@type": "MedicalOrganization",
      name: "RCG",
      url: "https://new.reabilitar-em-casa.com",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços de ${serviceName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
            description: description,
          },
          price: price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    keywords: [
      serviceName,
      "cuidados de saúde",
      "apoio domiciliário",
      "Portugal",
      "saúde",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
    />
  );
}
