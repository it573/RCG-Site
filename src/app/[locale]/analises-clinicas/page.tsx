import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import AppointmentForm from "@/components/forms/appointment-form";
import Services3 from "@/components/sections/service3";
import ServiceContent from "@/components/sections/service-content";
import SynlabDeals from "@/components/sections/synlabdeals";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.clinicalAnalysis?.metadata as { title?: string; description?: string };

  return {
    title: metadataMessages?.title || "Análises Clínicas ao Domicílio e em Carcavelos",
    description: metadataMessages?.description || "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab.",
    keywords: messages.clinicalAnalysis?.metadata?.keywords as string[] || ["análises clínicas", "colheitas domicílio"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'analises-clinicas' : 'clinical-analysis'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Análises Clínicas ao Domicílio e em Carcavelos",
      description: metadataMessages?.description || "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'analises-clinicas' : 'clinical-analysis'}`,
    },
  };
}

export default async function AnalisesClinicasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const clinicalAnalysisMessages = messages.clinicalAnalysis as {
    hero?: { title?: string; description?: string };
    serviceContent?: { title?: string; description?: string; imageAlt?: string; content?: string };
    form?: { title?: string };
    metadata?: { description?: string }
  };

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Análises Clínicas' : 'Clinical Analysis'}
        description={clinicalAnalysisMessages?.metadata?.description || "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab."}
        url={`/${locale === 'pt' ? 'analises-clinicas' : 'clinical-analysis'}`}
      />
      <Hero
        title={clinicalAnalysisMessages?.hero?.title || "Análises Clínicas ao Domicílio"}
        description={clinicalAnalysisMessages?.hero?.description || "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab."}
        showForm={false}
        backgroundImage="/images/hero/blood-test.jpg"
      />
      <ServiceContent
        title={clinicalAnalysisMessages?.serviceContent?.title || "Parceria Synlab"}
        description={clinicalAnalysisMessages?.serviceContent?.description || "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab."}
        image={{
          src: "/images/synlab-logo.png",
          alt: clinicalAnalysisMessages?.serviceContent?.imageAlt || "Logótipo Synlab",
          width: 600,
          height: 900
        }}
        sections={[
          {
            title: "",
            content: clinicalAnalysisMessages?.serviceContent?.content || ""
          },
        ]}
      />
      <Services3 />
      <div id="acordos">
        <SynlabDeals />
      </div>
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{clinicalAnalysisMessages?.form?.title || "Agende a sua análise"}</h2>
            <AppointmentForm campaign="CS" source="analises-clinicas" />
          </div>
        </div>
      </section>
    </>
  );
}
