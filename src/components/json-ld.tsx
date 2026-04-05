// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "RCG",
  alternateName: "RCG - Cuidados de Saúde",
  description: "Providenciamos cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal. Equipa disponível 24/7.",
  url: "https://www.reabilitar-em-casa.com",
  logo: "https://www.reabilitar-em-casa.com/logo.png",
  foundingDate: "2020",
  areaServed: {
    "@type": "Country",
    name: "Portugal",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PT",
    addressRegion: "Portugal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+351-210-136-676",
    availableLanguage: ["Portuguese"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Saúde",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apoio Domiciliário",
          description: "Cuidados personalizados no conforto do seu lar, com equipa dedicada 24 horas por dia.",
          url: "https://www.reabilitar-em-casa.com/apoio-domiciliario",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidados de Saúde",
          description: "Serviços de saúde personalizados prestados por profissionais qualificados.",
          url: "https://www.reabilitar-em-casa.com/cuidados-de-saude",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidados Continuados e Hospitalização Domiciliária",
          description: "Cuidados de longa duração e hospitalização no domicílio com equipa médica especializada.",
          url: "https://www.reabilitar-em-casa.com/cuidados-continuados-hospitalizacao",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Análises Clínicas",
          description: "Análises clínicas ao domicílio com recolha de amostras e resultados rápidos.",
          url: "https://www.reabilitar-em-casa.com/analises-clinicas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equipamento Hospitalar",
          description: "Aluguer e venda de equipamento hospitalar para uso domiciliar.",
          url: "https://www.reabilitar-em-casa.com/equipamento-hospitalar",
        },
      },
    ],
  },
  medicalSpecialty: ["Home Health Care", "Nursing", "Primary Care"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
