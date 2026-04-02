interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

interface FaqJsonLdProps {
  faqs: FAQItem[];
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  // Convert FAQ data to FAQPage schema format
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.answer === "string"
          ? faq.answer
          : // Handle JSX by extracting text content
            "Somos a única Entidade convencionada com vários subsistemas públicos e privados. Todos eles têm regras diferentes. Consulte os nossos Acordos ou contacte-nos para mais informações.",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageSchema),
      }}
    />
  );
}
