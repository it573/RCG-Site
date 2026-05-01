import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ReviewsJsonLd } from "@/components/ai-reviews-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.testimonials as { metadata?: { title?: string; description?: string; keywords?: string[] } };

  return {
    title: metadataMessages?.metadata?.title || "Testemunhos - O Que Dizem os Nossos Clientes",
    description: metadataMessages?.metadata?.description || "Leia os testemunhos de clientes satisfeitos com os nossos cuidados de saúde ao domicílio. Mais de 40 avaliações positivas de clientes em Portugal.",
    keywords: metadataMessages?.metadata?.keywords || ["testemunhos", "avaliações", "opiniões clientes", "feedback", "recomendações", "satisfação clientes", "RCG avaliações"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'testemunhos' : 'testimonials'}`,
    },
    openGraph: {
      title: metadataMessages?.metadata?.title || "Testemunhos - O Que Dizem os Nossos Clientes",
      description: metadataMessages?.metadata?.description || "Leia os testemunhos de clientes satisfeitos com os nossos cuidados de saúde ao domicílio.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'testemunhos' : 'testimonials'}`,
    },
  };
}

interface Testimonial {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  author: string;
}

export default async function TestemunhosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const testimonialsMessages = messages.testimonials as {
    header?: { title?: string; recentCount?: string };
    testimonials?: Array<{
      id?: number;
      title?: string;
      subtitle?: string;
      content?: string;
      author?: string;
    }>;
    totalCount?: { count?: number };
    praisedBy?: string;
    reviewSchema?: {
      name?: string;
      description?: string;
    };
  };

  const testimonials: Testimonial[] = (testimonialsMessages?.testimonials || []).map((t, index) => ({
    id: t.id || index + 1,
    title: t.title || "",
    subtitle: t.subtitle,
    content: t.content || "",
    author: t.author || ""
  }));

  const TOTAL_COUNT = testimonialsMessages?.totalCount?.count || 43;

  return (
    <>
      <ReviewsJsonLd totalCount={TOTAL_COUNT} />
      <TestimonialsContent
        testimonials={testimonials}
        totalCount={TOTAL_COUNT}
        messages={testimonialsMessages}
      />
    </>
  );
}

function TestimonialsContent({
  testimonials,
  totalCount,
  messages
}: {
  testimonials: Testimonial[],
  totalCount: number,
  messages: any
}) {
  // Create Review schema from testimonials
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: messages?.reviewSchema?.name || "Testemunhos de Clientes - RCG",
    description: messages?.reviewSchema?.description || "O que os nossos clientes dizem sobre os nossos serviços de saúde ao domicílio",
    review: testimonials.slice(0, 5).map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: testimonial.content,
      publisher: {
        "@type": "Organization",
        name: "RCG",
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: totalCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center">
          {/* Content Area */}
          <div className="w-full md:w-7/12 mt-10 md:mt-0">
            {/* Header */}
            <div className="mb-5 md:mb-7">
              <div className="flex flex-col items-center gap-0">
                <h3 className="m-0 text-base lg:text-2xl font-bold text-black leading-none p-0">
                  {messages?.header?.title || "Veja quem já nos elogiou"}
                  <small className="text-base font-normal"> ({messages?.header?.recentCount || `mais recentes de ${totalCount}`})</small>
                </h3>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-5">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-6 py-6 lg:px-10 lg:py-10 bg-white rounded-2xl shadow-lg"
                >
                  <div className="flex justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-teal-600 capitalize m-0 pr-4">
                        {testimonial.title}
                      </h3>
                      {testimonial.subtitle && (
                        <span className="block text-base font-normal text-[#3c3c3b] mb-1">
                          {testimonial.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-base text-black leading-relaxed whitespace-pre-line">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="m-0 text-[#666666]">
                      {messages?.praisedBy || "Elogiado por"} <strong className="font-semibold">{testimonial.author}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
