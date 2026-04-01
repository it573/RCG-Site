interface ServiceBox {
  title: string;
  description: string;
}

interface Service2InvertedProps {
  title?: string;
  services?: ServiceBox[];
}

const defaultServices: ServiceBox[] = [
  {
    title: "Uma Nova Era. Uma Nova Vida. Uma Nova Forma de Cuidar",
    description: "A Hospitalização Domiciliária consiste num modelo de assistência hospitalar do doente agudo, que se caracteriza pela prestação de cuidados diferenciados no pós alta hospitalar.\n\nDestina-se a doentes agudos com patologia de complexidade elevada mas com possibilidade de internamento hospitalar no domicílio.\n\nApós a avaliação do quadro do paciente para analisar a sua complexidade, é estabelecido um plano terapêutico a ser cumprido pela equipa multidisciplinar. As complexidades variam entre: alta, média e baixa complexidade (com ou sem ventilação).\n\nHumanizamos os cuidados, oferecendo tratamento diferenciado de nível hospitalar, no conforto do seu lar.",
  },
];

export default function Service2Inverted({
  title = "Hospitalização Domiciliária",
  services = defaultServices,
}: Service2InvertedProps) {
  return (
    <section className="py-20 bg-primary/85 overflow-hidden">
      <div className="container mx-auto px-2 max-w-[80%]">
        <div className="grid md:grid-cols-[35%_65%] divide-y md:divide-y-0 md:divide-x divide-white">
          {/* Title Column */}
          <div className="px-2 md:px-8 flex items-center pb-8 md:pb-0 md:pr-8 md:pl-0 animate-fade-in-left overflow-hidden">
            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Service Column */}
          <div className="px-2 md:px-8 pt-4 pb-8 md:pt-0 md:pb-0 animate-fade-in-right overflow-hidden" style={{ animationDelay: '100ms' }}>
            <h4 className="text-2xl font-semibold text-white mb-4">
              {services[0]?.title}
            </h4>
            <p className="text-white text-lg text-justify whitespace-pre-line">
              {services[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
