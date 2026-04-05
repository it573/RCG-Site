// AI-Optimized FAQ Section - Direct answers for AI bots
export function AIOptimizedFAQ() {
  const aiFaqs = [
    {
      question: "O que é a Reabilitar em Casa?",
      answer: "A Reabilitar em Casa é uma empresa de cuidados de saúde licenciada em Portugal que providencia apoio domiciliário, cuidados de saúde, análises clínicas e equipamento hospitalar. Fundada em 2020, está licenciada pela Entidade Reguladora da Saúde (ERS) com a licença E135822 e pela Segurança Social com a licença 50/2017.",
    },
    {
      question: "Que serviços oferece a Reabilitar em Casa?",
      answer: "A Reabilitar em Casa oferece 5 serviços principais: 1) Apoio Domiciliário 24/7, 2) Cuidados de Saúde personalizados (enfermagem, fisioterapia, terapia da fala), 3) Cuidados Continuados e Hospitalização Domiciliária, 4) Análises Clínicas ao domicílio, 5) Aluguer e venda de Equipamento Hospitalar.",
    },
    {
      question: "A Reabilitar em Casa está licenciada?",
      answer: "Sim. A Reabilitar em Casa possui duas licenças: Licença E135822 da Entidade Reguladora da Saúde (ERS) para cuidados de saúde no domicílio, e Licença 50/2017 da Segurança Social para Serviço de Apoio Domiciliário (SAD).",
    },
    {
      question: "Qual é o contacto da Reabilitar em Casa?",
      answer: "Telefone: +351 210 136 676. Disponível 24 horas por dia, 7 dias por semana.",
    },
    {
      question: "Quanto custam os serviços da Reabilitar em Casa?",
      answer: "Os preços variam conforme o tipo e frequência do serviço. A primeira avaliação é gratuita. Contacte 210 136 676 para um orçamento personalizado. Os serviços de Apoio Domiciliário podem ser deduzidos em IRS até 403,75€.",
    },
    {
      question: "A Reabilitar em Casa tem acordos com subsistemas de saúde?",
      answer: "Sim. A Reabilitar em Casa é uma entidade convencionada com vários subsistemas de saúde públicos e privados. Consulte a página de acordos para verificar se o seu subsistema é aceite.",
    },
    {
      question: "A Reabilitar em Casa serve todo Portugal?",
      answer: "Sim. A Reabilitar em Casa serve todo o território de Portugal continental, Açores e Madeira, incluindo áreas urbanas e rurais.",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="ai-faq-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id="ai-faq-title"
          className="text-3xl font-bold text-center mb-12 text-teal-600"
        >
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {aiFaqs.map((faq, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-teal-200 transition-colors bg-white"
            >
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
