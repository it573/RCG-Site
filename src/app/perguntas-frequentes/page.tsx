import { Metadata } from "next";
import { FAQAccordion } from "@/app/perguntas-frequentes/faq-accordion";
import { FaqJsonLd } from "@/components/faq-json-ld";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Reabilitar em Casa",
  description: "FAQs - Perguntas mais frequentes sobre os nossos serviços de saúde e apoio domiciliário",
};

const faqs = [
  {
    id: "faq-1",
    question: "A Reabilitar em Casa é licenciada para prestar Cuidados de Saúde no domicílio?",
    answer: "Sim. A nossa atividade é devidamente licenciada e supervisionada pela Entidade Reguladora da Saúde (ERS). A obtenção desta licença atesta que cumprimos todos os rigorosos requisitos legais, de qualidade e técnicos exigidos para a prestação de serviços de saúde, com cobertura nacional, garantindo total segurança e tranquilidade clínica aos nossos utentes.",
  },
  {
    id: "faq-2",
    question: "Têm licença para o Serviço de Apoio Domiciliário (SAD)?",
    answer: "Sim. A Reabilitar em Casa possui Licença de Funcionamento emitida pela Segurança Social, um requisito legal e obrigatório em Portugal. Este licenciamento atesta que cumprimos critérios de excelência em instalações, qualificação de recursos humanos, regulamentos internos e obrigações legais, garantindo a proteção dos direitos dos utentes. Além disso, possuímos Seguro de Responsabilidade Civil para salvaguarda de todas as intervenções.",
  },
  {
    id: "faq-3",
    question: "Como posso confirmar que o vosso Serviço de Apoio Domiciliário está legalizado?",
    answer: "A legalidade da nossa resposta social pode ser comprovada através do portal oficial da Carta Social (um instrumento do Estado Português que lista as entidades licenciadas). Pode consultar e verificar o nosso registo oficial diretamente em www.cartasocial.pt.",
  },
  {
    id: "faq-4",
    question: "Na Análises Clínicas, como garantem o rigor e a fiabilidade dos meus resultados Clínicos?",
    answer: "Enquadramento Legal: Operamos em Portugal com Licenciamento da ERS (Entidade Reguladora da Saúde) e Autorização da ARS (Administração Regional de Saúde) para colheitas fixas e em regime Ambulatório (Domicílio). Rigor no Transporte: Garantimos a fiabilidade das amostras com Logística Certificada (norma ISO 15189) e Monitorização de Temperatura constante durante o transporte. Laboratórios Acreditados: Colaboramos exclusivamente com Laboratórios de Patologia Clínica com Acreditação pelo IPAC, utilizando Sistemas de Interface Direta para processamento rápido e seguro dos resultados. Profissionais Qualificados: As colheitas são realizadas por Enfermeiros ou Técnicos de Diagnóstico e Terapêutica, inscritos nas respetivas Ordens e com formação em Boas Práticas de Colheita.",
  },
  {
    id: "faq-5",
    question: "Os vossos técnicos de saúde e cuidadores são credenciados?",
    answer: "Sim. Todos os nossos técnicos de saúde possuem cédula profissional válida emitida pela respetiva Ordem e pelo Ministério da Saúde. Além disso, somos uma entidade formadora acreditada pela DGERT, o que nos permite garantir que todos os ajudantes familiares e cuidadores passam por um recrutamento rigoroso, validação de referências, registo criminal limpo e formação contínua.",
  },
  {
    id: "faq-6",
    question: "Como escolhem o cuidador ou profissional de saúde para o meu familiar?",
    answer: "A alocação é 100% personalizada. Após uma avaliação clínica e do contexto do utente, definimos um Plano Individual de Cuidados (PIC). Selecionamos o profissional considerando não só as competências técnicas necessárias para o diagnóstico, mas também o perfil interpessoal que melhor se adapte aos hábitos e preferências do utente, podendo ainda ser colmatada essa personalização de serviços, com um plano de formação ajustado aos cuidados a serem prestados.",
  },
  {
    id: "faq-7",
    question: "E se o meu familiar não se adaptar ao cuidador ou técnico?",
    answer: "A empatia é crucial para o sucesso da reabilitação e bem-estar. Se não se estabelecer uma ligação positiva imediata entre o profissional e o utente, procedemos prontamente à substituição do colaborador. A nossa prioridade é garantir o conforto emocional da família e a eficácia do plano de cuidados.",
  },
  {
    id: "faq-8",
    question: "Como garantem o cumprimento do horário contratado ao domicílio?",
    answer: "Garantimos total transparência através de tecnologia. Utilizamos um sistema rigoroso de controlo de presenças via App Mobile, com leitura de QR-Code no domicílio do utente. Isto permite a geolocalização e o registo da hora exata de entrada e saída, alertando imediatamente a nossa equipa de coordenação perante qualquer desvio.",
  },
  {
    id: "faq-9",
    question: "O que está incluído no Serviço de Apoio Domiciliário (SAD)?",
    answer: "Os nossos serviços são adaptados a cada utente, mas incluem, de forma geral: Conversação e Companhia; Apoio nas demais atividades da vida diária; Cuidados de higiene pessoal e conforto; Confeção e acompanhamento de refeições (nutrição adequada); Assistência na toma de medicação; Tratamento de roupas de uso diário e pequenas limpezas do espaço do utente; Acompanhamento ao exterior e consultas; Promoção de atividades motoras e cognitivas; Cuidados permanentes 24h/dia; Posicionamentos (alteração de decúbitos) e transferências.",
  },
  {
    id: "faq-10",
    question: "A quem se destina o Serviço de Apoio Domiciliário (SAD)?",
    answer: "O serviço de apoio domiciliário destina-se a qualquer pessoa em Portugal, com dependência física, psíquica ou simplesmente porque necessita de um reforço ou ajuda familiar, podendo este serviço ser prestado de forma temporária ou definitiva. Tradicionalmente, quem solicita o apoio ao domicílio são pessoas com dificuldades nas Atividades Básicas da Vida Diária, enquadramento clínico e de saúde, enquadramento cognitivo e saúde mental, necessidades sociais e instrumentais, ou cuidadores em situação de burnout.",
  },
  {
    id: "faq-11",
    question: "Além de Cuidadores, disponibilizam médicos, enfermeiros ou terapeutas?",
    answer: "Sim. Dispomos de uma equipa multidisciplinar que se desloca a sua casa. Prestamos serviços de Enfermagem, Fisioterapia, Terapia da Fala, Terapia Ocupacional, Psicologia, Nutrição, Podologia e Consultas Médicas (Medicina Geral e Fisiatria). Realizamos também colheitas para Análises Clínicas no conforto do seu lar.",
  },
  {
    id: "faq-12",
    question: "Como funciona a 1ª visita de avaliação e qual o custo?",
    answer: "A primeira visita de avaliação é totalmente gratuita e sem compromisso. Deslocamo-nos a sua casa para avaliar não só o quadro clínico e de mobilidade, mas também as rotinas, gostos, e preocupações da família. O objetivo é desenhar um Plano de Cuidados 100% individualizado.",
  },
  {
    id: "faq-13",
    question: "Em quanto tempo conseguem iniciar o Apoio Domiciliário?",
    answer: "Garantimos uma resposta imediata. Após a visita de avaliação e aprovação do orçamento (com liquidação da fatura pro-forma), o agendamento dos cuidados arranca com a máxima brevidade. Sabemos que as necessidades de saúde não podem esperar.",
  },
  {
    id: "faq-14",
    question: "Qual o período mínimo para contratar os serviços e posso alterar horários?",
    answer: "Não existem contratos rígidos; as nossas soluções adaptam-se à vida real. Para o apoio domiciliário, o período de contratação varia consoante as suas necessidades (de 1 a 24 horas por dia, de forma pontual ou contínua). Se o estado de saúde evoluir, o plano e o horário podem ser ajustados prontamente. Para Cuidados de Saúde no Domicílio, não existem períodos mínimos. A periodicidade é ditada pelo Diagnóstico, Enquadramento e Regras do subsistema.",
  },
  {
    id: "faq-15",
    question: "Existe serviço aos fins de semana e feriados?",
    answer: "Sim, a nossa cobertura é Nacional, e 24/7 (365 dias/ano). No Apoio Domiciliário, garantimos serviços em feriados nacionais (com acréscimo de 50% sobre o valor diário) e épocas festivas como Natal, Páscoa e Ano Novo (acréscimo de 100%). Os cuidados de saúde técnicos dependem da calendarização acordada.",
  },
  {
    id: "faq-16",
    question: "Tive alta hospitalar e preciso de cama articulada. Vocês fornecem?",
    answer: "Sim. Damos apoio total através do aluguer e venda de Equipamentos Hospitalares e Ajudas Técnicas (camas articuladas, cadeiras de rodas, gruas de elevação, etc.). Tratamos da entrega, montagem e posterior recolha.",
  },
  {
    id: "faq-17",
    question: "Como é que a família é informada sobre o dia a dia do utente?",
    answer: "Através do nosso Diário de Cuidados Digital. Registamos todas as atividades da vida diária, ocorrências e evolução clínica. Além disso, o seu Gestor de Saúde (que coordena toda a equipa multidisciplinar) está sempre disponível para reuniões de feedback com a família.",
  },
  {
    id: "faq-18",
    question: "Quais as vantagens da Reabilitar em Casa face a uma clínica de retaguarda?",
    answer: "Os cuidados e reabilitação no domicílio oferecem benefícios comprovados: Redução de Infeções: Risco drasticamente menor de contrair infeções hospitalares. Recuperação Acelerada: O conforto do lar e a presença da família melhoram o estado cognitivo e emocional. Atenção Exclusiva: Ao contrário dos rácios hospitalares e clínicas, o profissional em casa está focado a 100% num só utente com enquadramento familiar. Preservação da Autonomia: O utente mantém as suas rotinas, laços sociais e dignidade intactos. Tempo otimizado: Evitam-se custos, tempos de deslocações e espera desnecessários.",
  },
  {
    id: "faq-19",
    question: "Posso beber água antes de uma colheita para Análise Clínica?",
    answer: "Sim, se a colheita for de sangue, é até recomendável! Beber água natural (sem açúcar ou gás) ajuda a manter a hidratação e facilita significativamente a colheita, tornando o processo mais rápido, confortável e indolor.",
  },
  {
    id: "faq-20",
    question: "Devo suspender a minha medicação e suplementação habitual, quando de uma colheita para Análise Clínica?",
    answer: "Regra geral, não deve suspender qualquer medicação, a menos que o seu médico assistente o tenha indicado especificamente. Contudo, sabendo que a medicação, suplementação e nutrição podem ter impacto nos resultados das análises clínicas, solicitamos que nos informe sempre, sobre o objetivo da colheita e seus hábitos, para garantirmos a fiabilidade dos resultados.",
  },
  {
    id: "faq-21",
    question: "Realizam colheitas ao domicílio, para efeito de Análises Clínicas?",
    answer: "Sim. Acreditamos que não há lugar onde se sinta mais seguro do que na sua própria casa. Disponibilizamos um serviço de colheita ao domicílio pensado para pessoas com mobilidade reduzida, idosos, grávidas, doentes em recuperação, crianças, bebés ou simplesmente para quem valoriza o seu tempo e privacidade. Os padrões de segurança, manuseamento, transporte e laboratoriais são os exigidos a qualquer clínica física ou laboratório.",
  },
  {
    id: "faq-22",
    question: "Têm colheitas, personalizadas para bebés e crianças?",
    answer: "Sem dúvida. O momento da picada pode ser assustador para os mais pequenos. Utilizamos uma abordagem lúdica, prémios de coragem e equipamento exclusivamente pediátrico para garantir que a experiência é o menos traumática possível, respeitando o tempo da criança e acalmando os pais.",
  },
  {
    id: "faq-23",
    question: "Tenho muito medo de agulhas (Aicmofobia). Como me podem ajudar?",
    answer: "Compreendemos perfeitamente essa ansiedade. Os nossos profissionais têm formação específica para lidar com fobias e ansiedade clínica. O processo é feito ao seu ritmo, num ambiente tranquilo, com a possibilidade de colheita em posição deitada para evitar tonturas, e utilizando técnicas de distração e minimização da dor. O nosso objetivo é que saia com um sorriso.",
  },
  {
    id: "faq-24",
    question: "Como é definido o orçamento do Apoio Domiciliário ou Cuidados de Saúde ao domicílio? Existem custos ocultos?",
    answer: "Não existem custos ocultos. No Apoio Domiciliário, O orçamento é apresentado de forma transparente após a avaliação inicial, refletindo o grau de dependência e as horas contratadas. Aos valores propostos não acrescem taxas extra, cauções ou IVA (os serviços de saúde e apoio domiciliário são isentos de IVA, à exceção do aluguer/venda de equipamentos). Nos Cuidados de Saúde ao Domicílio, o valor efetivo a pagar depende das condições da sua apólice, ou da tabela do subsistema em causa.",
  },
  {
    id: "faq-25",
    question: "As despesas com Apoio Domiciliário podem ser deduzidas no IRS?",
    answer: "Sim. Sendo a Reabilitar em Casa uma empresa devidamente licenciada pela Segurança Social, poderá deduzir 25% dos encargos na sua declaração de IRS (até ao limite máximo anual de 403,75€). Esta dedução é aplicável a despesas próprias, de ascendentes (pais/sogros) e colaterais.",
  },
  {
    id: "faq-26",
    question: "Os vossos serviços têm acordos ou comparticipações com Seguros e Subsistemas (ADSE, Médis, etc.)?",
    answer: "Sim. Com mais de 15 anos de experiência, construímos uma sólida rede de convenções e parcerias. Trabalhamos com ADSE, Médis, Multicare, AdvanceCare, SSCGD, ADM/IASFA, SNS, SAD/GNR, SAD/PSP, SAMS, entre muitos outros seguros privados e entidades públicas e privadas. Dependendo da sua apólice ou convenção, tratamos das autorizações prévias, copagamentos ou faturação direta ao subsistema. Além da dedução em sede de IRS, mediante a apresentação das faturas e recibos emitidos por entidade com Licença SAD (como é o caso da Reabilitar Em Casa), junto do subsistema em causa, poderá ainda obter uma comparticipação da despesa. Informe-se junto do seu subsistema.",
  },
];

export default function PerguntasFrequentesPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <div className="min-h-screen pt-40 pb-16" style={{ backgroundColor: '#fed7aa' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none px-8 py-10 bg-white rounded-2xl shadow-lg">
            <div className="entry-content">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Perguntas Frequentes (FAQ's) – Cuidados de Saúde e Apoio Domiciliário</h1>
                <p className="mb-4">
                  Comprometemo-nos com a melhoria contínua e a otimização de todos os processos inerentes aos nossos serviços de saúde e apoio ao domicílio. Para manter os nossos elevados padrões de transparência e qualidade, disponibilizamos as respostas às dúvidas mais comuns dos nossos clientes e familiares.
                </p>
                <p className="mb-6">
                  Se necessitar de informações adicionais para o seu caso específico, não hesite em contactar-nos.
                </p>
              </div>

              {/* FAQ Accordion */}
              <FAQAccordion faqs={faqs} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
