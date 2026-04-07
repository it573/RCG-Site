import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import RCGDeals from "@/components/sections/rcgdeals";
import AppointmentForm from "@/components/forms/appointment-form";
import { AgreementsJsonLd } from "@/components/ai-agreements-json-ld";

export const metadata: Metadata = {
  title: "Acordos e Convenções - Subsistemas de Saúde",
  description: "Somos convencionados com os principais subsistemas de saúde em Portugal: ADSE, SAD, SAMS, Médis, Multicare e mais. Confira se o seu subsistema aceita os nossos cuidados.",
  keywords: ["acordos saúde", "convenções", "subsistemas saúde", "ADSE", "SAD", "SAMS", "Médis", "Multicare", "seguros saúde", "comparticipações"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/acordos-convencoes",
  },
  openGraph: {
    title: "Acordos e Convenções - Subsistemas de Saúde",
    description: "Somos convencionados com os principais subsistemas de saúde em Portugal: ADSE, SAD, SAMS, Médis e mais.",
    url: "https://www.reabilitar-em-casa.com/acordos-convencoes",
  },
};

export default function AcordosConvencoesPage() {
  return (
    <>
      <AgreementsJsonLd />
      <Hero
        title="Acordos e Convenções"
        description="Colaboramos com as principais entidades de saúde para proporcionar os melhores cuidados."
        showForm={false}
        backgroundImage="/images/hero/acordos.jpg"
      />
      <RCGDeals />
      <section className="py-20 overflow-x-hidden" style={{ background: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Nós Ligamos!</h2>
            <AppointmentForm campaign="" source="acordos-convencoes" />
          </div>
        </div>
      </section>
    </>
  );
}
