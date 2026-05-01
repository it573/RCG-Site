import { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.faq?.metadata as { title?: string; description?: string };

  return {
    title: metadataMessages?.title || "Perguntas Frequentes | Reabilitar em Casa",
    description: metadataMessages?.description || "FAQs - Perguntas mais frequentes sobre os nossos serviços",
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'perguntas-frequentes' : 'faq'}`,
    },
  };
}

export default async function PerguntasFrequentesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const faqMessages = messages.faq as {
    hero?: { title?: string; description?: string; contact?: string };
    faqs?: Array<{ id?: string; question?: string; answer?: string }>;
  };

  const faqs = faqMessages?.faqs?.map(faq => ({
    id: faq.id || "",
    question: faq.question || "",
    answer: faq.answer || ""
  })) || [];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
            <div className="entry-content">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">{faqMessages?.hero?.title || "Perguntas Frequentes"}</h1>
                <p className="mb-4">
                  {faqMessages?.hero?.description || "Perguntas mais frequentes sobre os nossos serviços."}
                </p>
                <p className="mb-6">
                  {faqMessages?.hero?.contact || "Se necessitar de informações adicionais, contacte-nos."}
                </p>
              </div>

              {/* FAQ Accordion */}
              <FAQAccordion faqs={faqs} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
