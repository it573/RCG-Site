import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import { RecruitmentJsonLd } from "@/components/ai-recruitment-json-ld";
import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadataMessages = messages.recruitment as { metadata?: { title?: string; description?: string; keywords?: string[] } };

  return {
    title: metadataMessages?.metadata?.title || "Recrutamento - Trabalhe Connosco",
    description: metadataMessages?.metadata?.description || "Junte-se à equipa da RCG! Procuramos profissionais de saúde dedicados: enfermeiros, fisioterapeutas, cuidadores e médicos. Candidaturas abertas para cuidados domiciliários.",
    keywords: metadataMessages?.metadata?.keywords || ["recrutamento", "emprego saúde", "enfermeiro", "fisioterapeuta", "cuidador", "médico domicílio", "trabalhe connosco", "carreira saúde"],
    alternates: {
      canonical: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'recrutamento' : 'recruitment'}`,
    },
    openGraph: {
      title: metadataMessages?.metadata?.title || "Recrutamento - Trabalhe Connosco",
      description: metadataMessages?.metadata?.description || "Junte-se à equipa da RCG! Procuramos profissionais de saúde dedicados para cuidados domiciliários.",
      url: `https://www.reabilitar-em-casa.com/${locale === 'pt' ? 'recrutamento' : 'recruitment'}`,
    },
  };
}

export default async function RecrutamentoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const recruitmentMessages = messages.recruitment as {
    hero?: { title?: string; description?: string };
    content?: { title?: string };
  };

  return (
    <>
      <RecruitmentJsonLd />
      <Hero
        title={recruitmentMessages?.hero?.title || "Recrutamento"}
        description={recruitmentMessages?.hero?.description || "Faça parte da nossa equipa. Procuramos profissionais dedicados, que queiram fazer parte da nossa missão de proporcionar Cuidados de Saúde de Excelência."}
        showForm={false}
        backgroundImage="/images/hero/recruitment.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            {recruitmentMessages?.content?.title || "Recrutamento Nacional para prestação de Cuidados"}
          </h2>
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
