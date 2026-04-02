import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Confianca from "@/components/sections/confianca";
import Service21 from "@/components/sections/service21";
import Services5 from "@/components/sections/services5";
import AppointmentForm from "@/components/forms/appointment-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import LocationSeoContent from "@/components/sections/location-seo-content";

export const metadata: Metadata = {
  title: "Apoio Domiciliário | RCG",
  description: "Serviços de apoio domiciliário personalizados e de excelência em Portugal. Cuidadores 24/7, cuidados de enfermagem e assistência no conforto do seu lar.",
  keywords: ["apoio domiciliário", "cuidadores domicílio", "cuidados enfermagem", "assistência domiciliária", "cuidados idosos", "apoio seniores", "cuidados 24 horas"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/apoio-domiciliario",
  },
  openGraph: {
    title: "Apoio Domiciliário | RCG",
    description: "Serviços de apoio domiciliário personalizados e de excelência em Portugal.",
    url: "https://new.reabilitar-em-casa.com/apoio-domiciliario",
  },
};

export default function ApoioDomiciliarioPage() {
  const breadcrumbs = [
    { label: "Serviços", href: "#" },
    { label: "Apoio Domiciliário" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        title="Apoio Domiciliário"
        description="Proporcionamos cuidados personalizados no conforto do seu lar, com uma equipa dedicada e disponível 24 horas por dia."
        showForm={false}
        backgroundImage="/images/hero/caregiver.png"
      />
      <Service21 />
      <Confianca />
      <Services5 />

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Serviços Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/cuidados-de-saude"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Cuidados de Saúde</h3>
              <p className="text-muted-foreground">
                Serviços de enfermagem, fisioterapia e assistência médica especializada ao domicílio.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
            <a
              href="/cuidados-continuados-hospitalizacao"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Cuidados Continuados</h3>
              <p className="text-muted-foreground">
                Cuidados de longa duração e hospitalização domiciliária com equipa médica 24/7.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
            <a
              href="/analises-clinicas"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Análises Clínicas</h3>
              <p className="text-muted-foreground">
                Posto de colheitas em Carcavelos e análises ao domicílio em parceria com Synlab.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
          </div>
        </div>
      </section>

      <LocationSeoContent
        serviceName="Apoio Domiciliário"
        serviceDescription="serviços de apoio domiciliário personalizados e de excelência, com cuidadores 24/7, assistência na higiene, alimentação, medicação e acompanhamento"
      />

      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
