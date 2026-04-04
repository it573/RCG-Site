import type { Metadata } from "next";
import Hero from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Recrutamento - Trabalhe Connosco | RCG",
  description: "Junte-se à equipa da RCG! Procuramos profissionais de saúde dedicados: enfermeiros, fisioterapeutas, cuidadores e médicos. Candidaturas abertas para cuidados domiciliários.",
  keywords: ["recrutamento", "emprego saúde", "enfermeiro", "fisioterapeuta", "cuidador", "médico domicílio", "trabalhe connosco", "carreira saúde"],
  alternates: {
    canonical: "https://new.reabilitar-em-casa.com/recrutamento",
  },
  openGraph: {
    title: "Recrutamento - Trabalhe Connosco | RCG",
    description: "Junte-se à equipa da RCG! Procuramos profissionais de saúde dedicados para cuidados domiciliários.",
    url: "https://new.reabilitar-em-casa.com/recrutamento",
  },
};

export default function RecrutamentoPage() {
  return (
    <>
      <Hero
        title="Recrutamento"
        description="Faça parte da nossa equipa. Procuramos profissionais dedicados, que queiram fazer parte da nossa missão de proporcionar Cuidados de Saúde de Excelência."
        showForm={false}
        backgroundImage="/images/hero/recruitment.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-full">
            <iframe
              src="https://reabilitaremcasa.my.salesforce-sites.com/applicant"
              className="w-full border-0 rounded-lg h-[1700px] md:h-[1500px]"
              title="Formulário de Candidatura"
            />
          </div>
        </div>
      </section>
    </>
  );
}
