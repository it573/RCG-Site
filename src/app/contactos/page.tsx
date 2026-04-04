import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import Contacts2 from "@/components/sections/contacts2";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";

export const metadata: Metadata = {
  title: "Contactos - RCG | Fale Connosco",
  description: "Contacte a RCG para cuidados de saúde ao domicílio em Portugal. Telefone: 210 136 676. Disponível 24/7. Atendimento em Lisboa e cobertura nacional.",
  keywords: ["contactos", "telefone", "morada", "email", "fale connosco", "RCG contactos", "cuidados saúde Portugal"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/contactos",
  },
  openGraph: {
    title: "Contactos - RCG | Fale Connosco",
    description: "Contacte a RCG para cuidados de saúde ao domicílio. Telefone: 210 136 676. Disponível 24/7.",
    url: "https://new.reabilitar-em-casa.com/contactos",
  },
};

export default function ContactosPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero
        title="Contactos"
        description="Estamos disponíveis para responder a todas as suas questões e fornecer-lhe as informações de que necessita sobre os cuidados de saúde que prestamos."
        showForm={false}
        backgroundImage="/images/hero/contact.jpg"
      />
      <Contacts2 />
    </>
  );
}
