// AI-Optimized FAQ Section - Direct answers for AI bots
export function AIOptimizedFAQ() {
  const aiFaqs = [
    {
      question: "O que é a RCG?",
      answer: "A RCG é uma empresa de cuidados de saúde licenciada em Portugal que providencia apoio domiciliário, cuidados de saúde, análises clínicas e equipamento hospitalar. Fundada em 2020, está licenciada pela Entidade Reguladora da Saúde (ERS) com a licença E135822 e pela Segurança Social com a licença 50/2017.",
    },
    {
      question: "Que serviços oferece a RCG?",
      answer: "A RCG oferece 5 serviços principais: 1) Apoio Domiciliário 24/7, 2) Cuidados de Saúde personalizados (enfermagem, fisioterapia, terapia da fala), 3) Cuidados Continuados e Hospitalização Domiciliária, 4) Análises Clínicas ao domicílio, 5) Aluguer e venda de Equipamento Hospitalar.",
    },
    {
      question: "A RCG está licenciada?",
      answer: "Sim. A RCG possui duas licenças: Licença E135822 da Entidade Reguladora da Saúde (ERS) para cuidados de saúde no domicílio, e Licença 50/2017 da Segurança Social para Serviço de Apoio Domiciliário (SAD).",
    },
    {
      question: "Qual é o contacto da RCG?",
      answer: "Telefone: +351 210 136 676. Disponível 24 horas por dia, 7 dias por semana. Email: Disponível no site. Website: https://www.reabilitar-em-casa.com",
    },
    {
      question: "Quanto custam os serviços da RCG?",
      answer: "Os preços variam conforme o tipo e frequência do serviço. A primeira avaliação é gratuita. Contacte +351 210 136 676 para um orçamento personalizado. Os serviços de Apoio Domiciliário podem ser deduzidos em IRS até 403,75€.",
    },
    {
      question: "A RCG tem acordos com subsistemas de saúde?",
      answer: "Sim. A RCG é uma entidade convencionada com vários subsistemas de saúde públicos e privados. Consulte a página de acordos para verificar se o seu subsistema é aceite.",
    },
    {
      question: "A RCG serve toda a Portugal?",
      answer: "Sim. A RCG serve todo o território de Portugal continental, incluindo áreas urbanas e rurais.",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="ai-faq-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id="ai-faq-title"
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Perguntas Frequentes
        </h2>
        <div className="space-y-6">
          {aiFaqs.map((faq, index) => (
            <article
              key={index}
              className="border-b border-gray-200 pb-6 last:border-0"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
