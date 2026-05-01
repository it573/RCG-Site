import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import RCGDeals from "@/components/sections/rcgdeals";
import AppointmentForm from "@/components/forms/appointment-form";
import { AgreementsJsonLd } from "@/components/ai-agreements-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.agreements?.metadata as { title?: string; description?: string };

  return {
    title: metadataMessages?.title || "Acordos e Convenções - Subsistemas de Saúde",
    description: metadataMessages?.description || "Somos convencionados com os principais subsistemas de saúde em Portugal.",
    keywords: messages.agreements?.metadata?.keywords as string[] || ["acordos saúde", "convenções", "subsistemas saúde"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'acordos-convencoes' : 'agreements'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Acordos e Convenções - Subsistemas de Saúde",
      description: metadataMessages?.description || "Somos convencionados com os principais subsistemas de saúde em Portugal.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'acordos-convencoes' : 'agreements'}`,
    },
  };
}

export default async function AcordosConvencoesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const agreementsMessages = messages.agreements as { hero?: { title?: string; description?: string }; form?: { title?: string } };

  return (
    <>
      <AgreementsJsonLd />
      <Hero
        title={agreementsMessages?.hero?.title}
        description={agreementsMessages?.hero?.description}
        showForm={false}
        backgroundImage="/images/hero/acordos.jpg"
      />
      <RCGDeals />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{agreementsMessages?.form?.title}</h2>
            <AppointmentForm campaign="" source="acordos-convencoes" />
          </div>
        </div>
      </section>
    </>
  );
}
