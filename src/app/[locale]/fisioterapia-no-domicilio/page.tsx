import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Confianca from "@/components/sections/confianca";
import Service21 from "@/components/sections/service21";
import Services5 from "@/components/sections/services5";
import AppointmentForm from "@/components/forms/appointment-form";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.physiotherapy?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Fisioterapia ao Domicílio",
    description: metadataMessages?.description || "Fisioterapia ao domicílio com fisioterapeutas qualificados e certificados, no conforto do seu lar.",
    keywords: metadataMessages?.keywords || ["fisioterapia ao domicílio", "fisioterapeuta domicílio", "reabilitação motora"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/fisioterapia-no-domicilio`,
    },
    openGraph: {
      title: metadataMessages?.title || "Fisioterapia ao Domicílio",
      description: metadataMessages?.description || "Fisioterapia ao domicílio com fisioterapeutas qualificados e certificados, no conforto do seu lar.",
      url: `https://www.reabilitar-em-casa.com/fisioterapia-no-domicilio`,
    },
  };
}

export default async function FisioterapiaNoDomicilioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const physiotherapyMessages = messages.physiotherapy as {
    hero?: { title?: string; description?: string };
    service21?: {
      title?: string;
      titleHighlight?: string;
      services?: Array<{
        title?: string;
        description?: string;
      }>;
    };
    confianca?: {
      title?: string;
      description?: string;
      pillar?: string;
      howWeWork?: {
        title?: string;
        steps?: Array<{
          title?: string;
          description?: string;
        }>;
      };
    };
    services5?: {
      services?: Array<{ title?: string }>;
    };
    form?: { title?: string };
    metadata?: { description?: string }
  };

  // Prepare services for Services5 component
  const serviceImages = [
    "/images/fisioterapia.jpg",
    "/images/fisioterapia.jpg",
    "/images/fisioterapia.jpg",
    "/images/fisioterapia.jpg",
    "/images/fisioterapia.jpg",
    "/images/fisioterapia.jpg",
  ];

  const services5Data = serviceImages.map((image, index) => ({
    image,
    title: physiotherapyMessages?.services5?.services?.[index]?.title || "",
    description: "",
    link: "#",
  }));

  // Prepare services for Service21 component
  const service21Data = physiotherapyMessages?.service21?.services?.map((service, index) => ({
    title: service.title || "",
    description: service.description || "",
    image: index === 1 ? "/images/ss-cs.jpg" : undefined,
  })) || [];

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Fisioterapia ao Domicílio' : 'Home Physiotherapy'}
        description={physiotherapyMessages?.metadata?.description || "Fisioterapia ao domicílio com fisioterapeutas qualificados e certificados, no conforto do seu lar."}
        url={`/fisioterapia-no-domicilio`}
      />
      <Hero
        title={physiotherapyMessages?.hero?.title || "Fisioterapia ao Domicílio"}
        description={physiotherapyMessages?.hero?.description || "Fisioterapeutas Qualificados e Certificados"}
        showForm={true}
        backgroundImage="/images/fisioterapia.jpg"
        showStampImage={true}
      />
      <Service21
        title={physiotherapyMessages?.service21?.title}
        titleHighlight={physiotherapyMessages?.service21?.titleHighlight}
        services={service21Data}
      />
      <Confianca
        title={physiotherapyMessages?.confianca?.title}
        description={physiotherapyMessages?.confianca?.description}
        pillar={physiotherapyMessages?.confianca?.pillar}
        howWeWork={physiotherapyMessages?.confianca?.howWeWork}
      />
      <Services5 services={services5Data} />

      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{physiotherapyMessages?.form?.title || "Fisioterapia em Casa"}</h2>
            <AppointmentForm campaign="FISIO" source="fisioterapia-no-domicilio" />
          </div>
        </div>
      </section>
    </>
  );
}
