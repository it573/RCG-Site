import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Service2 from "@/components/sections/service2";
import Service2Inverted from "@/components/sections/service2inverted";
import AppointmentForm from "@/components/forms/appointment-form";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.continuedCareHospitalization?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Cuidados Continuados e Hospitalização Domiciliária",
    description: metadataMessages?.description || "Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada.",
    keywords: metadataMessages?.keywords || ["cuidados continuados", "hospitalização domiciliária"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'cuidados-continuados-hospitalizacao' : 'continued-care-hospitalization'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Cuidados Continuados e Hospitalização Domiciliária",
      description: metadataMessages?.description || "Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'cuidados-continuados-hospitalizacao' : 'continued-care-hospitalization'}`,
    },
  };
}

export default async function CuidadosContinuadosHospitalizacaoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const continuedCareMessages = messages.continuedCareHospitalization as {
    hero?: { title?: string; description?: string };
    service2?: { title?: string; serviceTitle?: string; serviceDescription?: string };
    service2Inverted?: { title?: string; serviceTitle?: string; serviceDescription?: string };
    form?: { title?: string };
    metadata?: { description?: string }
  };

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Cuidados Continuados e Hospitalização Domiciliária' : 'Continued Care and Home Hospitalization'}
        description={continuedCareMessages?.metadata?.description || "Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada."}
        url={`/${locale === 'pt' ? 'cuidados-continuados-hospitalizacao' : 'continued-care-hospitalization'}`}
      />
      <Hero
        title={continuedCareMessages?.hero?.title || "Cuidados Continuados e Hospitalização"}
        description={continuedCareMessages?.hero?.description || "Cuidados especializados de longa duração e hospitalização ao domicílio."}
        showForm={false}
        backgroundImage="/images/hero/hospital.jpg"
      />
      <Service2
        title={continuedCareMessages?.service2?.title}
        services={[{
          title: continuedCareMessages?.service2?.serviceTitle || "",
          description: continuedCareMessages?.service2?.serviceDescription || ""
        }]}
      />
      <Service2Inverted
        title={continuedCareMessages?.service2Inverted?.title}
        services={[{
          title: continuedCareMessages?.service2Inverted?.serviceTitle || "",
          description: continuedCareMessages?.service2Inverted?.serviceDescription || ""
        }]}
      />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{continuedCareMessages?.form?.title || "Nós Ligamos!"}</h2>
            <AppointmentForm campaign="" source="cuidados-continuados-hospitalizacao" />
          </div>
        </div>
      </section>
    </>
  );
}
