import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Confianca from "@/components/sections/confianca";
import Service21 from "@/components/sections/service21";
import Services5 from "@/components/sections/services5";
import AppointmentForm from "@/components/forms/appointment-form";
import LocationSeoContent from "@/components/sections/location-seo-content";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";

export const metadata: Metadata = {
  title: "Apoio Domiciliário",
  description: "Serviços de apoio domiciliário personalizados e de excelência em Portugal. Cuidadores 24/7, cuidados de enfermagem e assistência no conforto do seu lar.",
  keywords: ["apoio domiciliário", "cuidadores domicílio", "cuidados enfermagem", "assistência domiciliária", "cuidados idosos", "apoio seniores", "cuidados 24 horas"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/apoio-domicilio",
  },
  openGraph: {
    title: "Apoio Domiciliário",
    description: "Serviços de apoio domiciliário personalizados e de excelência em Portugal.",
    url: "https://www.reabilitar-em-casa.com/apoio-domicilio",
  },
};

export default function ApoioDomiciliarioPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Apoio Domiciliário"
        description="Serviços de apoio domiciliário personalizados e de excelência em Portugal. Cuidadores 24/7, cuidados de enfermagem e assistência no conforto do seu lar."
        url="/apoio-domicilio"
      />
      <Hero
        title="Apoio Domiciliário"
        description="Proporcionamos cuidados personalizados no conforto do seu lar, com uma equipa dedicada e disponível 24 horas por dia."
        showForm={false}
        backgroundImage="/images/hero/caregiver.jpg"
        showStampImage={true}
      />
      <Service21 />
      <Confianca />
      <Services5 />

      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Nós Ligamos!</h2>
            <AppointmentForm campaign="AD" source="apoio-domicilio" />
          </div>
        </div>
      </section>
    </>
  );
}
