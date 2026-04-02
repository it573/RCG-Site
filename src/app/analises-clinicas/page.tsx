import type { Metadata } from "next";
import AnalisesClinicasClient from "./analises-clinicas-client";

export const metadata: Metadata = {
  title: "Análises Clínicas ao Domicílio e em Carcavelos | RCG",
  description: "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab. Check-ups, testes de nutrição, hormonais e muito mais. Resultados rápidos e fiáveis.",
  keywords: ["análises clínicas", "colheitas domicílio", "posto colheitas carcavelos", "synlab", "check-up saúde", "testes laboratoriais", "análises sangue", "exames médicos"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/analises-clinicas",
  },
  openGraph: {
    title: "Análises Clínicas ao Domicílio e em Carcavelos | RCG",
    description: "Posto de colheitas em Carcavelos e análises clínicas ao domicílio em parceria com Synlab.",
    url: "https://new.reabilitar-em-casa.com/analises-clinicas",
  },
};

export default function AnalisesClinicasPage() {
  return <AnalisesClinicasClient />;
}
