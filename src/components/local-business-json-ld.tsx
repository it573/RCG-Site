export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.reabilitar-em-casa.com",
    name: "RCG",
    alternateName: "Reabilitar em Casa",
    description: "Cuidados de saúde ao domicílio em Portugal. Serviços de enfermagem, fisioterapia, análises clínicas, cuidados continuados e equipamento hospitalar.",
    url: "https://www.reabilitar-em-casa.com",
    telephone: "+351-210-136-676",
    telephone2: "+351-917-861-795",
    email: "geral@reabilitar-em-casa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Itália, nº1, Piso 1, Escritório 6",
      addressLocality: "Carcavelos",
      postalCode: "2775-407",
      addressCountry: "PT",
      addressRegion: "Lisboa",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.6867",
      longitude: "-9.3444",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    priceRange: "€€",
    image: "https://www.reabilitar-em-casa.com/logo.png",
    sameAs: [
      "https://www.facebook.com/reabilitaremcasa",
      "https://www.linkedin.com/company/reabilitar-em-casa",
      "https://www.instagram.com/reabilitaremcasa",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
