import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Doctors2 from "@/components/sections/doctors2";
import AppointmentForm from "@/components/forms/appointment-form";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";

export const metadata: Metadata = {
  title: "Equipamento Hospitalar e Ajudas Técnicas | RCG",
  description: "Aluguer e venda de equipamento hospitalar e ajudas técnicas para uso domicílio. Entrega rápida em Portugal. Cadeiras de rodas, camas hospitalares, material de enfermagem.",
  keywords: ["equipamento hospitalar", "ajudas técnicas", "aluguer equipamento médico", "cama hospitalar", "cadeira de rodas", "material enfermagem", "equipamento domicílio"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/equipamento-hospitalar",
  },
  openGraph: {
    title: "Equipamento Hospitalar e Ajudas Técnicas | RCG",
    description: "Aluguer e venda de equipamento hospitalar e ajudas técnicas para uso domicílio. Entrega rápida em Portugal.",
    url: "https://new.reabilitar-em-casa.com/equipamento-hospitalar",
  },
};

export default function EquipamentoHospitalarPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Equipamento Hospitalar"
        description="Aluguer e venda de equipamento hospitalar e ajudas técnicas para uso domicílio. Entrega rápida em Portugal. Cadeiras de rodas, camas hospitalares, material de enfermagem."
        url="/equipamento-hospitalar"
      />
      <Hero
        title="Equipamento Hospitalar"
        description="Disponibilizamos produtos de apoio, ajudas técnicas, com entrega ao Domicílio, em regime de Aluguer ou Venda.  Consulte-nos para mais Informações."
        showForm={false}
        backgroundImage="/images/hero/equipamentos.jpg"
      />
      <Doctors2 />
      <section className="py-20" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacte-nos!</h2>
            <AppointmentForm campaign="" source="equipamento-hospitalar" />
          </div>
        </div>
      </section>
    </>
  );
}
