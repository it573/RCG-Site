// Health Insurance Agreements Schema for AI optimization
const agreementsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.reabilitar-em-casa.com/#organization",
      name: "RCG",
      description: "Cuidados de saúde ao domicílio convencionados com subsistemas de saúde",
      healthPlanNetwork: {
        "@type": "HealthPlanNetwork",
        name: "Subsistemas de Saúde Convencionados RCG",
        description: "A RCG é convencionada com os principais subsistemas de saúde em Portugal, permitindo comparticipações nos cuidados de saúde ao domicílio.",
        healthPlanDrugOption: [
          {
            "@type": "HealthInsurancePlan",
            "name": "ADSE",
            "description": "Subsistema de Proteção Social da Administração Pública",
            "identifier": "ADSE",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "SAD",
            "description": "Sistema de Assistência na Doença aos Militares das Forças Armadas",
            "identifier": "SAD",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "SAMS",
            "description": "Serviço de Assistência Médica e Social da Polícia de Segurança Pública",
            "identifier": "SAMS",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "Médis",
            "description": "Seguro de saúde Médis",
            "identifier": "Médis",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "Multicare",
            "description": "Seguro de saúde Multicare",
            "identifier": "Multicare",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "AdvanceCare",
            "description": "Seguro de saúde AdvanceCare",
            "identifier": "AdvanceCare",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "CARE",

            "description": "Seguro de saúde CARE",
            "identifier": "CARE",
          },
          {
            "@type": "HealthInsurancePlan",
            "name": "Allianz",
            "description": "Seguro de saúde Allianz",
            "identifier": "Allianz",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que subsistemas de saúde aceita a RCG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A RCG é convencionada com ADSE, SAD, SAMS, Médis, Multicare, AdvanceCare, CARE e Allianz. Contacte-nos para verificar a cobertura específica do seu subsistema.",
          },
        },
        {
          "@type": "Question",
          name: "Os cuidados de saúde ao domicílio são comparticipados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Os serviços prestados pela RCG são comparticipados quando o cliente tem um dos subsistemas de saúde convencionados. A comparticipação depende das regras de cada subsistema.",
          },
        },
        {
          "@type": "Question",
          name: "Como verificar se o meu subsistema é aceite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consulte a página de Acordos e Convenções no site da RCG ou contacte-nos através do telefone 210 136 676 para verificar se o seu subsistema de saúde é aceite.",
          },
        },
      ],
    },
  ],
};

export function AgreementsJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(agreementsSchema),
      }}
    />
  );
}
