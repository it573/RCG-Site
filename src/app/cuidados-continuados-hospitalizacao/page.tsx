import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Service2 from "@/components/sections/service2";
import Service2Inverted from "@/components/sections/service2inverted";
import AppointmentForm from "@/components/forms/appointment-form";
import LocationSeoContent from "@/components/sections/location-seo-content";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";

export const metadata: Metadata = {
  title: "Cuidados Continuados e Hospitalização Domiciliária | RCG",
  description: "Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada 24/7. Alternativa segura ao hospital, no conforto do seu lar.",
  keywords: ["cuidados continuados", "hospitalização domiciliária", "cuidados de longa duração", "internamento domicílio", "cuidados paliativos", "equipa médica domicílio"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/cuidados-continuados-hospitalizacao",
  },
  openGraph: {
    title: "Cuidados Continuados e Hospitalização Domiciliária | RCG",
    description: "Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada 24/7.",
    url: "https://www.reabilitar-em-casa.com/cuidados-continuados-hospitalizacao",
  },
};

export default function CuidadosContinuadosHospitalizacaoPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Cuidados Continuados e Hospitalização Domiciliária"
        description="Cuidados de longa duração e hospitalização ao domicílio com equipa médica especializada 24/7. Alternativa segura ao hospital, no conforto do seu lar."
        url="/cuidados-continuados-hospitalizacao"
      />
      <Hero
        title="Cuidados Continuados e Hospitalização"
        description="Cuidados especializados de longa duração e hospitalização ao domicílio com equipa médica disponível 24 horas."
        showForm={false}
        backgroundImage="/images/hero/hospital.jpg"
      />
      <Service2 />
      <Service2Inverted />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm campaign="" source="cuidados-continuados-hospitalizacao" />
          </div>
        </div>
      </section>
    </>
  );
}

export function CuidadosContinuadosPageContent() {
  return (
    <>
      <Hero
        title="Cuidados Continuados e Hospitalização"
        description="Cuidados especializados de longa duração e hospitalização ao domicílio com equipa médica disponível 24 horas."
        showForm={false}
        backgroundImage="/images/hero/hospital.jpg"
      />
      <Service2 />
      <Service2Inverted />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm campaign="" source="cuidados-continuados-hospitalizacao" />
          </div>
        </div>
      </section>
    </>
  );
}
