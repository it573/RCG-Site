import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Services51 from "@/components/sections/services51";
import AppointmentForm from "@/components/forms/appointment-form";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.healthcare?.metadata as { title?: string; description?: string; keywords?: string[] };

  return {
    title: metadataMessages?.title || "Cuidados de Saúde ao Domicílio em Portugal",
    description: metadataMessages?.description || "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio.",
    keywords: metadataMessages?.keywords || ["cuidados de saúde", "enfermagem domicílio"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'cuidados-de-saude' : 'healthcare'}`,
    },
    openGraph: {
      title: metadataMessages?.title || "Cuidados de Saúde ao Domicílio em Portugal",
      description: metadataMessages?.description || "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'cuidados-de-saude' : 'healthcare'}`,
    },
  };
}

export default async function CuidadosDeSaudePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const healthcareMessages = messages.healthcare as {
    hero?: { title?: string; description?: string };
    services51?: { services?: Array<{ title?: string; description?: string }> };
    form?: { title?: string };
    metadata?: { description?: string }
  };

  // Prepare services for Services51 component
  const serviceImages = [
    "/images/clinica-geral.jpg",
    "/images/fisioterapia.jpg",
    "/images/ocupacional.jpg",
    "/images/enfermagem.jpg",
    "/images/nutricionista.jpg",
    "/images/fala.jpg",
  ];

  const services51Data = serviceImages.map((image, index) => ({
    image,
    title: healthcareMessages?.services51?.services?.[index]?.title || "",
    description: healthcareMessages?.services51?.services?.[index]?.description || "",
    link: "#",
  }));

  return (
    <>
      <ServiceJsonLd
        serviceName={locale === 'pt' ? 'Cuidados de Saúde' : 'Healthcare'}
        description={healthcareMessages?.metadata?.description || "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio."}
        url={`/${locale === 'pt' ? 'cuidados-de-saude' : 'healthcare'}`}
      />
      <Hero
        title={healthcareMessages?.hero?.title || "Cuidados de Saúde"}
        description={healthcareMessages?.hero?.description || "Proporcionamos cuidados de saúde personalizados e de excelência."}
        showForm={true}
        backgroundImage="/images/hero/pediatria.jpg"
      />
      <Services51 services={services51Data} />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{healthcareMessages?.form?.title || "Nós Ligamos!"}</h2>
            <AppointmentForm campaign="" source="cuidados-de-saude" />
          </div>
        </div>
      </section>
    </>
  );
}
