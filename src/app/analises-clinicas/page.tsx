import type { Metadata } from "next";
import AnalisesClinicasClient from "./analises-clinicas-client";
import { ServiceJsonLd } from "@/components/ai-service-json-ld";

export const metadata: Metadata = {
  title: "Análises Clínicas ao Domicílio e em Carcavelos",
  description: "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab. Check-ups, testes de nutrição, hormonais e muito mais. Resultados rápidos e fiáveis.",
  keywords: ["análises clínicas", "colheitas domicílio", "posto colheitas carcavelos", "synlab", "check-up saúde", "testes laboratoriais", "análises sangue", "exames médicos"],
  alternates: {
    canonical: "https://www.reabilitar-em-casa.com/analises-clinicas",
  },
  openGraph: {
    title: "Análises Clínicas ao Domicílio e em Carcavelos",
    description: "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab.",
    url: "https://www.reabilitar-em-casa.com/analises-clinicas",
  },
};

export default function AnalisesClinicasPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Análises Clínicas"
        description="Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab. Check-ups, testes de nutrição, hormonais e muito mais. Resultados rápidos e fiáveis."
        url="/analises-clinicas"
      />
      <AnalisesClinicasClient />
    </>
  );
}
