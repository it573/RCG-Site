// About Page Schema for AI optimization
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://new.reabilitar-em-casa.com/#organization",
      name: "RCG",
      alternateName: "RCG - Cuidados de Saúde",
      url: "https://new.reabilitar-em-casa.com",
      logo: "https://new.reabilitar-em-casa.com/logo.png",
      description: "A RCG é uma empresa licenciada que providencia cuidados de saúde personalizados, apoio domiciliário, análises clínicas e equipamento hospitalar em Portugal. Equipa disponível 24/7.",
      foundingDate: "2020",
      areaServed: {
        "@type": "Country",
        name: "Portugal",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+351-210-136-676",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      sameAs: [
        // Add social media links when available
        // "https://facebook.com/rcg-saude",
        // "https://linkedin.com/company/rcg",
      ],
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://new.reabilitar-em-casa.com/#medical",
      name: "RCG",
      medicalSpecialty: ["Home Health Care", "Nursing", "Primary Care"],
      license: [
        "E135822 (ERS) - Licença para Cuidados de Saúde no domicílio",
        "50/2017 (Segurança Social) - Licença SAD",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://new.reabilitar-em-casa.com/#local",
      name: "RCG",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PT",
        addressRegion: "Portugal",
      },
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "$$",
    },
  ],
};

export function AboutJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutSchema),
      }}
    />
  );
}
