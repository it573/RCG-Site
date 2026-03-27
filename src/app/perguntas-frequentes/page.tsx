import { Metadata } from "next";
import { FAQAccordion } from "@/app/perguntas-frequentes/faq-accordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Reabilitar em Casa",
  description: "FAQs - Perguntas mais frequentes sobre os nossos serviços de saúde e apoio domiciliário",
};

const faqs = [
  {
    id: "faq-1",
    question: "A Reabilitar em Casa é licenciada para o exercício dos Cuidados de Saúde no domicílio?",
    answer: "Sim. Por lei, a Licença para esta atividade é necessária. Somos licenciados pela Entidade Reguladora da Saúde (ERS) que é uma entidade pública independente que tem por missão a regulação da atividade dos estabelecimentos prestadores de cuidados de saúde. A nossa licença é a Nr. E135822.",
  },
  {
    id: "faq-2",
    question: "A Reabilitar em Casa é licenciada para o exercício de Serviço de Apoio Domiciliário (SAD)?",
    answer: "Sim. Somos licenciados pela Segurança Social. Por lei, a Licença de Funcionamento para a SAD é necessária para que os Estabelecimentos de Apoio Social geridos por Entidades Privadas e Instituições Particulares de Solidariedade Social, possam exercer atividade. A nossa licença é a Nr. 50/2017.",
  },
  {
    id: "faq-3",
    question: "Como podem garantir que a Reabilitar em Casa cumpre a Lei relativamente ao exercicio de Serviço de Apoio Domiciliário (SAD)?",
    answer: "Através do link abaixo poderá obter a informação sobre a rede de serviços e equipamentos licenciados pela Segurança social. \"A Carta Social pretende ser simultaneamente um instrumento multiusos de extrema flexibilidade nos domínios da informação social, de suporte no apoio à tomada de decisão aos diversos níveis, de apoio à cooperação institucional e, em particular, de informação ao cidadão\". http://www.cartasocial.pt/resultados_pesquisadetalhe.php?cod_area=21&valencia=2101&equip=34086",
  },
  {
    id: "faq-4",
    question: "Os vossos técnicos de saúde são credenciados?",
    answer: "Todos os nossos técnicos de saúde, são detentores de cédula profissional emitida pelo Ministério da Saúde, documento que atesta a autorização para o exercício da profissão.",
  },
  {
    id: "faq-5",
    question: "Qual o custo da avaliação / 1ª visita?",
    answer: "A nossa 1ª visita não tem qualquer custo. Deslocamo-nos até si para avaliar as suas necessidades, conhecer os seus hábitos, gostos e preocupações, por forma a adequarmos os nossos serviços, e irmos ao encontro de prestarmos os melhores cuidados.",
  },
  {
    id: "faq-6",
    question: "Qual o período pelo qual tenho de contratar os serviços da Reabilitar em Casa?",
    answer: "Mediante a avaliação dos nossos técnicos de saúde especializados, ser-lhe à dada a informação sobre quais os cuidados que recomendamos que sejam prestados. Cabe ao cliente e/ou família decidirem quais os serviços que pretendem, somos flexíveis e adaptamos a nossa equipa às suas necessidades. Os serviços a prestar podem ser pontuais ou esporádicos, durante 365 dias/ ano, 24H/dia.",
  },
  {
    id: "faq-7",
    question: "As despesas com o Serviço Apoio Domiciliário podem ser abatidas em sede de IRS?",
    answer: "As despesas com o Serviço Apoio Domiciliário, prestado por empresas com alvará emitido pela Segurança Social, podem ser abatidas em sede de IRS. Pode deduzir 25% do montante de encargos com lares e Apoio Domiciliário até ao limite máximo de 403,75 euros. Estão incluídas despesas próprias, de ascendentes e de colaterais até ao 3º grau (com rendimentos inferiores ao salário mínimo nacional).",
  },
  {
    id: "faq-8",
    question: "Existe algum contrato de prestação de serviços?",
    answer: "Apenas aquele que é exigido por lei para as SAD –Serviço de Apoio Domiciliário, por forma a estar informado sobre os serviços contemplados neste tipo de apoio, obrigações e/ou direitos. Para Fisioterapia, Terapia da Fala, Enfermagem, … e/ou atos médicos não existe qualquer contrato de prestação de serviços.",
  },
  {
    id: "faq-9",
    question: "Tenho subsistema de saude, os vossos serviços são comparticipados?",
    answer: (
      <>
        Somos a única Entidade <strong>convencionada</strong> com vários subsistemas públicos e privados. Todos eles têm regras diferentes. Consulte os nossos{" "}
        <a href="/acordos" className="text-blue-600 hover:text-blue-800 underline">
          <strong>Acordos</strong>
        </a>{" "}
        ou contacte-nos para mais informações.
      </>
    ),
  },
];

export default function PerguntasFrequentesPage() {
  return (
    <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
          <div className="entry-content">
            {/* Header */}
            <div className="mb-8">
              <p className="text-2xl font-bold mb-4">PERGUNTAS FREQUENTES</p>
              <p className="mb-4">
                Estamos apostados na melhoria contínua e otimização dos processos que envolvem todos os nossos serviços, bem como, de todos os processos que decorrem do relacionamento com os nossos clientes.
              </p>
              <p className="mb-4">
                Nesse sentido, e porque queremos manter os níveis de qualidade elevados na prestação de serviços a todos os clientes, disponibilizamos o documento "FAQ's" frequently asked questions/perguntas mais frequentes – que responde às dúvidas habituais no âmbito dos nossos serviços.
              </p>
              <p className="mb-6">
                Em caso de dúvida ou necessidade de mais esclarecimentos, não deixe de nos contactar pelos meios ao seu dispor.
              </p>
            </div>

            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
          </div>
        </article>
      </div>
    </div>
  );
}
