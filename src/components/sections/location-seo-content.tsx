interface LocationSeoContentProps {
  serviceName: string;
  serviceDescription: string;
  locations?: string[];
}

const defaultLocations = [
  {
    city: "Lisboa",
    content: "cuidados de saúde ao domicílio em Lisboa, com equipas locais prontas a responder em menos de 2 horas",
  },
  {
    city: "Porto",
    content: "serviços de saúde domiciliários no Porto e Grande Porto, com profissionais especializados",
  },
  {
    city: "Braga",
    content: "apoio domiciliário em Braga e Minho, com enfermeiros e fisioterapeutas disponíveis",
  },
  {
    city: "Coimbra",
    content: "cuidados de saúde em Coimbra e região Centro, com hospitalização domiciliária disponível",
  },
  {
    city: "Faro",
    content: "serviços de saúde no Algarve, especialmente durante a época de verão",
  },
  {
    city: "Carcavelos",
    content: "posto de colheitas de análises clínicas em Carcavelos, em parceria com a Synlab",
  },
];

export default function LocationSeoContent({
  serviceName,
  serviceDescription,
  locations,
}: LocationSeoContentProps) {
  const locationsToShow = locations || defaultLocations.map((l) => l.city);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {serviceName} em Todo o País
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            A RCG proporciona {serviceDescription}. Com cobertura nacional em Portugal continental,
           equipas locais em Lisboa, Porto, Braga, Coimbra, Faro e outras cidades, garantindo
            resposta rápida e profissional onde precisar.
          </p>

          <div className="space-y-6 mb-8">
            {defaultLocations.map((location, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{location.city}</h3>
                  <p className="text-muted-foreground">{location.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">
              Precisa de {serviceName.toLowerCase()} na sua área?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contacte-nos para verificar a disponibilidade e obter um orçamento gratuito.
            </p>
            <a
              href="tel:+351210136676"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Ligar: 210 136 676
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
