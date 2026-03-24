import Hero from "@/components/sections/hero";

export const metadata = {
  title: "Recrutamento - RCG",
  description: "Junte-se à nossa equipa de profissionais de saúde",
};

export default function RecrutamentoPage() {
  return (
    <>
      <Hero
        title="Recrutamento"
        description="Estamos sempre à procura de profissionais dedicados que queiram fazer parte da nossa missão de proporcionar cuidados de saúde de excelência"
        showForm={false}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="w-full">
            <iframe
              src="https://reabilitaremcasa.my.salesforce-sites.com/applicant"
              className="w-full border-0 rounded-lg h-[1500px] md:h-[1300px]"
              title="Formulário de Candidatura"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </>
  );
}
