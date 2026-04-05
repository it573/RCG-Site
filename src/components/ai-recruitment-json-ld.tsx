// Job Posting Schema for AI optimization
const recruitmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://new.reabilitar-em-casa.com/#organization",
      name: "RCG",
      url: "https://new.reabilitar-em-casa.com",
      description: "Empresa de cuidados de saúde ao domicílio em Portugal",
    },
    {
      "@type": "JobPosting",
      title: "Enfermeiro/a - Cuidados de Saúde ao Domicílio",
      description: "Procuramos enfermeiros licenciados para prestação de cuidados de saúde ao domicílio. Requisitos: Cédula profissional ativa. Disponibilidade para trabalho por turnos. Experiência em cuidados domiciliários preferencial.",
      identifier: {
        "@type": "PropertyValue",
        name: "RCG",
        value: "ENF-2026",
      },
      datePosted: "2026-01-01",
      validThrough: "2026-12-31",
      hiringOrganization: {
        "@type": "Organization",
        name: "RCG",
        sameAs: "https://new.reabilitar-em-casa.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
      },
      employmentType: "FULL_TIME",
      jobLocationType: "TRAVEL",
    },
    {
      "@type": "JobPosting",
      title: "Fisioterapeuta - Cuidados de Saúde ao Domicílio",
      description: "Procuramos fisioterapeutas para prestação de cuidados de reabilitação ao domicílio. Requisitos: Cédula profissional ativa. Experiência em reabilitação. Disponibilidade para deslocações.",
      identifier: {
        "@type": "PropertyValue",
        name: "RCG",
        value: "FISIO-2026",
      },
      datePosted: "2026-01-01",
      validThrough: "2026-12-31",
      hiringOrganization: {
        "@type": "Organization",
        name: "RCG",
        sameAs: "https://new.reabilitar-em-casa.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
      },
      employmentType: "FULL_TIME",
      jobLocationType: "TRAVEL",
    },
    {
      "@type": "JobPosting",
      title: "Cuidador/a - Apoio Domiciliário",
      description: "Procuramos cuidadores para apoio domiciliário. Requisitos: Formação em cuidados de saúde ou experiência comprovável. Disponibilidade para trabalho por turnos (24h, 12h, 8h). Capacidade de prestação de cuidados de higiene e conforto.",
      identifier: {
        "@type": "PropertyValue",
        name: "RCG",
        value: "CUID-2026",
      },
      datePosted: "2026-01-01",
      validThrough: "2026-12-31",
      hiringOrganization: {
        "@type": "Organization",
        name: "RCG",
        sameAs: "https://new.reabilitar-em-casa.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
      },
      employmentType: "FULL_TIME",
      jobLocationType: "TRAVEL",
    },
    {
      "@type": "JobPosting",
      title: "Médico/a - Cuidados de Saúde ao Domicílio",
      description: "Procuramos médicos para prestação de cuidados de saúde ao domicílio. Requisitos: Cédula profissional ativa. Ordem dos Médicos. Disponibilidade para consultas ao domicílio.",
      identifier: {
        "@type": "PropertyValue",
        name: "RCG",
        value: "MED-2026",
      },
      datePosted: "2026-01-01",
      validThrough: "2026-12-31",
      hiringOrganization: {
        "@type": "Organization",
        name: "RCG",
        sameAs: "https://new.reabilitar-em-casa.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
      },
      employmentType: "PART_TIME",
      jobLocationType: "TRAVEL",
    },
    {
      "@type": "JobPosting",
      title: "Terapeuta da Fala - Reabilitação ao Domicílio",
      description: "Procuramos terapeutas da fala para prestação de cuidados de reabilitação ao domicílio. Requisitos: Cédula profissional ativa. Experiência em terapia da fala.",
      identifier: {
        "@type": "PropertyValue",
        name: "RCG",
        value: "TF-2026",
      },
      datePosted: "2026-01-01",
      validThrough: "2026-12-31",
      hiringOrganization: {
        "@type": "Organization",
        name: "RCG",
        sameAs: "https://new.reabilitar-em-casa.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
      },
      employmentType: "FULL_TIME",
      jobLocationType: "TRAVEL",
    },
  ],
};

export function RecruitmentJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(recruitmentSchema),
      }}
    />
  );
}
