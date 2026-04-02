import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import About2 from "@/components/sections/about2";
import About4 from "@/components/sections/about4";

export const metadata: Metadata = {
  title: "Quem Somos - RCG | Cuidados de Saúde em Portugal",
  description: "A RCG é líder em cuidados de saúde ao domicílio em Portugal. Conheça a nossa história, missão, valores e equipa licenciada. Cobertura nacional com qualidade e excelência.",
  keywords: ["quem somos", "sobre nós", "RCG", "cuidados saúde Portugal", "missão valores", "equipa médica", "história empresa"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/quem-somos",
  },
  openGraph: {
    title: "Quem Somos - RCG | Cuidados de Saúde em Portugal",
    description: "A RCG é líder em cuidados de saúde ao domicílio em Portugal. Conheça a nossa história, missão e valores.",
    url: "https://new.reabilitar-em-casa.com/quem-somos",
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <Hero
        title="Quem Somos"
        description="Cuidados de saúde de excelência ao Domicílio, com cobertura nacional."
        showForm={false}
        backgroundImage="/images/hero/family.jpeg"
      />
      <About2 />
      <About4 />
    </>
  );
}