interface ConfiancaProps {
  title?: string;
  description?: string;
  pillar?: string;
  howWeWork?: {
    title?: string;
    steps?: Array<{
      title?: string;
      description?: string;
    }>;
  };
}

const defaultHowWeWork = {
  title: "Como atuamos?",
  steps: [
    {
      title: "Diagnóstico de Necessidade",
      description: "Após o seu contacto inicial, realizamos uma triagem detalhada para compreender as especificidades do caso. Partilhamos os valores de rigor e humanismo que guiam a nossa empresa há 20 anos."
    },
    {
      title: "Proposta Personalizada",
      description: "Apresentamos soluções adaptadas à realidade de cada família, garantindo clareza e transparência desde o primeiro segundo."
    },
    {
      title: "Avaliação Técnica Especializada",
      description: "Com a aceitação da proposta, avaliamos a extensão da intervenção e traçamos o perfil do ajudante familiar ideal, garantindo uma compatibilidade perfeita."
    },
    {
      title: "Garantia e Ajuste",
      description: "Formalizamos o nosso compromisso através de um contrato simplificado e acompanhamos a evolução de cada caso, ajustando as tarefas sempre que necessário para o bem-estar da família."
    },
    {
      title: "Resposta Imediata",
      description: "Estamos aptos a iniciar o apoio num prazo máximo de 24/48 horas após a avaliação."
    }
  ]
};

export default function Confianca({
  title = "Cuidados de Confiança",
  description = "Com uma equipa que soma duas décadas de experiência dedicada ao saber cuidar, transformamos a prestação de cuidados num compromisso de excelência e proximidade.",
  pillar = "Assentamos a nossa intervenção num pilar inabalável: a Confiança.",
  howWeWork = defaultHowWeWork,
}: ConfiancaProps) {
  return (
    <section className="py-20" style={{ background: '#dcfce7' }}>
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            {description}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {pillar}
          </p>
        </div>

        {/* How We Work Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
            {howWeWork.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howWeWork.steps?.slice(0, 4).map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-teal-600 mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Step 5 - Full Width */}
          {howWeWork.steps && howWeWork.steps[4] && (
            <div className="mt-8 bg-teal-50 p-6 rounded-lg border border-teal-200 shadow-sm">
              <h4 className="text-xl font-bold text-teal-600 mb-3">
                {howWeWork.steps[4].title}
              </h4>
              <p className="text-muted-foreground">
                {howWeWork.steps[4].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
