import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Services51 from "@/components/sections/services51";
import AppointmentForm from "@/components/forms/appointment-form";
import LocationSeoContent from "@/components/sections/location-seo-content";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";

export const metadata: Metadata = {
  title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
  description: "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio em Portugal. Equipa licenciada pela ERS, disponível 24/7. Cuidamos de si e da sua família.",
  keywords: ["cuidados de saúde", "enfermagem domicílio", "fisioterapia domicílio", "assistência médica", "cuidadores domicílio", "saúde em Portugal", "apoio domiciliário"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/cuidados-de-saude",
  },
  openGraph: {
    title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
    description: "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio. Equipa licenciada pela ERS, disponível 24/7.",
    url: "https://www.reabilitar-em-casa.com/cuidados-de-saude",
  },
};

export default function CuidadosDeSaudePage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Cuidados de Saúde"
        description="Serviços de enfermagem, fisioterapia e assistência médica ao domicílio em Portugal. Equipa licenciada pela ERS, disponível 24/7 para cuidados de saúde personalizados."
        url="/cuidados-de-saude"
      />
      <Hero
        title="Cuidados de Saúde"
        description="Proporcionamos cuidados de saúde personalizados e de excelência, com cobertura nacional."
        showForm={false}
        backgroundImage="/images/hero/pediatria.jpg"
      />
      <Services51 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm campaign="" source="cuidados-de-saude" />
          </div>
        </div>
      </section>
    </>
  );
}
