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
  const metadataMessages = messages.homeSupport?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Apoio Domiciliário",
    description: metadataMessages?.description || "Serviços de apoio domiciliário personalizados e de excelência em Portugal.",
    keywords: metadataMessages?.keywords || ["apoio domiciliário", "cuidadores domicílio", "cuidados enfermagem"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'apoio-domicilio' : 'home-support'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Apoio Domiciliário",
      description: metadataMessages?.description || "Serviços de apoio domiciliário personalizados e de excelência em Portugal.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'apoio-domicilio' : 'home-support'}`,
    },
  };
}

export default async function ApoioDomiciliarioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const homeSupportMessages = messages.homeSupport as {
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
    "/images/higiene.jpg",
    "/images/refeicoes.jpg",
    "/images/acompanhamentoconsultas.jpg",
    "/images/medicamentos.jpg",
    "/images/conversacaocompanhia.jpg",
    "/images/24horas.jpg",
  ];

  const services5Data = serviceImages.map((image, index) => ({
    image,
    title: homeSupportMessages?.services5?.services?.[index]?.title || "",
    description: "",
    link: "#",
  }));

  // Prepare services for Service21 component
  const service21Data = homeSupportMessages?.service21?.services?.map((service, index) => ({
    title: service.title || "",
    description: service.description || "",
    image: index === 1 ? "/images/ss-cs.jpg" : undefined,
  })) || [];

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Apoio Domiciliário' : 'Home Support'}
        description={homeSupportMessages?.metadata?.description || "Serviços de apoio domiciliário personalizados e de excelência em Portugal."}
        url={`/${locale === 'pt' ? 'apoio-domicilio' : 'home-support'}`}
      />
      <Hero
        title={homeSupportMessages?.hero?.title || "Apoio Domiciliário"}
        description={homeSupportMessages?.hero?.description || "Proporcionamos cuidados personalizados no conforto do seu lar."}
        showForm={true}
        backgroundImage="/images/hero/caregiver.jpg"
        showStampImage={true}
      />
      <Service21
        title={homeSupportMessages?.service21?.title}
        titleHighlight={homeSupportMessages?.service21?.titleHighlight}
        services={service21Data}
      />
      <Confianca
        title={homeSupportMessages?.confianca?.title}
        description={homeSupportMessages?.confianca?.description}
        pillar={homeSupportMessages?.confianca?.pillar}
        howWeWork={homeSupportMessages?.confianca?.howWeWork}
      />
      <Services5 services={services5Data} />

      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{homeSupportMessages?.form?.title || "Nós Ligamos!"}</h2>
            <AppointmentForm campaign="AD" source="apoio-domicilio" />
          </div>
        </div>
      </section>
    </>
  );
}
