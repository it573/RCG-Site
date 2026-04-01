interface ServiceBox {
  title: string;
  description: string;
}

interface Service2Props {
  title?: string;
  services?: ServiceBox[];
}

const defaultServices: ServiceBox[] = [
  {
    title: "Levamos até si todos os cuidados de que necessita!",
    description: "Devido ao envelhecimento progressivo da população, ocorrem com maior frequência situações de vulnerabilidade física e psíquica, que podem conduzir ao aparecimento de situações patológicas crónicas e originar, na maioria dos casos, dependência dentro de limites nem sempre controláveis pelo próprio e/ou seu agregado familiar. De ressalvar que a situação de dependência pode ocorrer em qualquer outro grupo de idade, podendo igualmente necessitar deste tipo de Resposta Social.\n\nAo prestar este serviço, a Reabilitar em Casa tem como objetivo proporcionar o bem-estar e o desenvolvimento individual dos clientes, num clima de segurança afetiva, física e psíquica e numa perspetiva de cuidados especializados, através do atendimento individualizado e personalizado, na colaboração estreita entre equipa médica e família.",
  },
];

export default function Service2({
  title = "Cuidados Continuados",
  services = defaultServices,
}: Service2Props) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-2 max-w-[80%]">
        <div className="grid md:grid-cols-[35%_65%] divide-y md:divide-y-0 md:divide-x divide-primary">
          {/* Left Column - Title */}
          <div className="px-2 md:px-8 flex items-center pb-8 md:pb-0 md:pr-8 md:pl-0 animate-fade-in-left overflow-hidden">
            <h2 className="text-4xl font-bold text-foreground">
              {title === "Cuidados Continuados" ? (
                <>
                  <span className="md:hidden">Cuidados<br />Continuados</span>
                  <span className="hidden md:inline">Cuidados Continuados</span>
                </>
              ) : (
                title
              )}
            </h2>
          </div>

          {/* Center Column - First Service */}
          <div className="px-2 md:px-8 pt-4 pb-8 md:pt-0 md:pb-0 animate-fade-in-right overflow-hidden" style={{ animationDelay: '100ms' }}>
            <h4 className="text-2xl font-semibold text-primary mb-4">
              {services[0]?.title}
            </h4>
            <p className="text-muted-foreground text-lg text-justify whitespace-pre-line">
              {services[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
