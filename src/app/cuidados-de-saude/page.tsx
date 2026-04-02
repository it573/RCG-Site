import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Services51 from "@/components/sections/services51";
import AppointmentForm from "@/components/forms/appointment-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import LocationSeoContent from "@/components/sections/location-seo-content";

export const metadata: Metadata = {
  title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
  description: "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio em Portugal. Equipa licenciada pela ERS, disponível 24/7. Cuidamos de si e da sua família.",
  keywords: ["cuidados de saúde", "enfermagem domicílio", "fisioterapia domicílio", "assistência médica", "cuidadores domicílio", "saúde em Portugal", "apoio domiciliário"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/cuidados-de-saude",
  },
  openGraph: {
    title: "Cuidados de Saúde ao Domicílio em Portugal | RCG",
    description: "Serviços de enfermagem, fisioterapia e assistência médica ao domicílio. Equipa licenciada pela ERS, disponível 24/7.",
    url: "https://new.reabilitar-em-casa.com/cuidados-de-saude",
  },
};

export default function CuidadosDeSaudePage() {
  const breadcrumbs = [
    { label: "Serviços", href: "#" },
    { label: "Cuidados de Saúde" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        title="Cuidados de Saúde"
        description="Proporcionamos cuidados de saúde personalizados e de excelência, com cobertura nacional."
        showForm={false}
        backgroundImage="/images/hero/pediatria.jpg"
      />
      <Services51 />

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Serviços Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/apoio-domiciliario"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Apoio Domiciliário</h3>
              <p className="text-muted-foreground">
                Cuidadores 24/7 e assistência personalizada no conforto do seu lar.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
            <a
              href="/analises-clinicas"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Análises Clínicas</h3>
              <p className="text-muted-foreground">
                Posto de colheitas e análises ao domicílio com resultados rápidos.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
            <a
              href="/equipamento-hospitalar"
              className="block p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">Equipamento Hospitalar</h3>
              <p className="text-muted-foreground">
                Aluguer de equipamento médico e ajudas técnicas para uso domiciliário.
              </p>
              <span className="text-primary font-semibold mt-4 inline-block">Saiba mais →</span>
            </a>
          </div>
        </div>
      </section>

      <LocationSeoContent
        serviceName="Cuidados de Saúde"
        serviceDescription="cuidados de saúde especializados ao domicílio, incluindo enfermagem, fisioterapia, assistência médica e tratamentos de reabilitação"
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
