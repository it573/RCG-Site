export default function Confianca() {
  return (
    <section className="py-20" style={{ background: '#dcfce7' }}>
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cuidados de Confiança
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Com uma equipa que soma duas décadas de experiência dedicada ao saber cuidar, transformamos a prestação de cuidados num compromisso de excelência e proximidade.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Assentamos a nossa intervenção num pilar inabalável: a Confiança.
          </p>
        </div>

        {/* How We Work Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
            Como atuamos?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-teal-600 mb-3">
                Diagnóstico de Necessidade
              </h4>
              <p className="text-muted-foreground">
                Após o seu contacto inicial, realizamos uma triagem detalhada para compreender as especificidades do caso. Partilhamos os valores de rigor e humanismo que guiam a nossa empresa há 20 anos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-teal-600 mb-3">
                Proposta Personalizada
              </h4>
              <p className="text-muted-foreground">
                Apresentamos soluções adaptadas à realidade de cada família, garantindo clareza e transparência desde o primeiro segundo.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-teal-600 mb-3">
                Avaliação Técnica Especializada
              </h4>
              <p className="text-muted-foreground">
                Com a aceitação da proposta, avaliamos a extensão da intervenção e traçamos o perfil do ajudante familiar ideal, garantindo uma compatibilidade perfeita.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-teal-600 mb-3">
                Garantia e Ajuste
              </h4>
              <p className="text-muted-foreground">
                Formalizamos o nosso compromisso através de um contrato simplificado e acompanhamos a evolução de cada caso, ajustando as tarefas sempre que necessário para o bem-estar da família.
              </p>
            </div>
          </div>

          {/* Step 5 - Full Width */}
          <div className="mt-8 bg-teal-50 p-6 rounded-lg border border-teal-200 shadow-sm">
            <h4 className="text-xl font-bold text-teal-600 mb-3">
              Resposta Imediata
            </h4>
            <p className="text-muted-foreground">
              Estamos aptos a iniciar o apoio num prazo máximo de 24/48 horas após a avaliação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
