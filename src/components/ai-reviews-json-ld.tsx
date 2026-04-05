// Reviews/AggregateRating Schema for AI optimization
interface ReviewsJsonLdProps {
  totalCount?: number;
  ratingValue?: string;
}

export function ReviewsJsonLd({
  totalCount = 43,
  ratingValue = "4.8",
}: ReviewsJsonLdProps) {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://new.reabilitar-em-casa.com/#organization",
        name: "RCG",
        url: "https://new.reabilitar-em-casa.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue,
          reviewCount: totalCount,
          bestRating: "5",
          worstRating: "1",
          itemReviewed: {
            "@type": "Organization",
            name: "RCG - Cuidados de Saúde e Apoio Domiciliário",
          },
        },
      },
      {
        "@type": "Product",
        name: "Serviços de Cuidados de Saúde ao Domicílio RCG",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue,
          reviewCount: totalCount,
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Margarida Basso",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: "Agradeço à Rita a dedicação, a simpatia, a disponibilidade e o profissionalismo com que tratou o meu pai. À Isabel deixo também o meu obrigada, pela simpatia no atendimento.",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Kilzeanne Nicolau",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: "Sempre disponível quando preciso resolver alguma questão. E sempre consigo junto a empresa resolver as coisas da melhor maneira possível.",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Maria Elisabeth dos Santos Rocha",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: "Fiz uma cirurgia à anca. Estou a fazer fisioterapia com o fisioterapeuta Tiago. Já fiz 10 sessões. Estou a meio do tratamento. Recupero a olhos vistos. O saber do fisioterapeuta Tiago aliado ao carinho com que me orienta, a toda a sua empatia, leva-me a querer realçar a excelência do seu trabalho.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewsSchema),
      }}
    />
  );
}
