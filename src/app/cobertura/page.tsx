import type { Metadata } from "next";
import { MetadataRoute } from "next";
import Hero from "@/components/sections/hero";
import CoverageArea from "@/components/sections/coverage-area";

export const metadata: Metadata = {
  title: "Cobertura Nacional - Onde Atuamos | RCG",
  description: "A RCG oferece cuidados de saúde ao domicílio em todo Portugal. Encontre-nos em Lisboa, Porto, Braga, Coimbra, Faro e outras cidades. Cobertura nacional 24/7.",
  keywords: ["cobertura nacional", "cuidados saúde Lisboa", "cuidados saúde Porto", "apoio domiciliário Braga", "saúde Coimbra", "cuidados Faro", "serviços saúde Portugal"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/cobertura",
  },
  openGraph: {
    title: "Cobertura Nacional - Onde Atuamos | RCG",
    description: "A RCG oferece cuidados de saúde ao domicílio em todo Portugal. Lisboa, Porto, Braga, Coimbra, Faro e mais.",
    url: "https://new.reabilitar-em-casa.com/cobertura",
  },
};

export default function CoberturaPage() {
  return (
    <>
      <Hero
        title="Cobertura Nacional"
        description="A RCG está presente em todo o território de Portugal continental com equipas especializadas em cuidados de saúde ao domicílio."
        showForm={false}
        backgroundImage="/images/hero/contacts.png"
      />
      <CoverageArea />
    </>
  );
}
