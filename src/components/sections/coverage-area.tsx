import { MapPin, CheckCircle2 } from "lucide-react";

interface Location {
  city: string;
  region: string;
  services: string[];
}

interface CoverageAreaProps {
  title?: string;
  description?: string;
  locations?: Location[];
}

const defaultLocations: Location[] = [
  {
    city: "Lisboa",
    region: "Grande Lisboa",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Análises Clínicas", "Cuidados Continuados"],
  },
  {
    city: "Porto",
    region: "Grande Porto",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Cuidados Continuados"],
  },
  {
    city: "Carcavelos",
    region: "Cascais",
    services: ["Apoio Domiciliário", "Análises Clínicas (Posto de Colheitas)", "Cuidados de Saúde"],
  },
  {
    city: "Cascais",
    region: "Linha de Cascais",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Fisioterapia"],
  },
  {
    city: "Sintra",
    region: "Grande Lisboa",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Enfermagem"],
  },
  {
    city: "Amadora",
    region: "Grande Lisboa",
    services: ["Apoio Domiciliário", "Cuidados Continuados", "Assistência Médica"],
  },
  {
    city: "Braga",
    region: "Minho",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Cuidados Paliativos"],
  },
  {
    city: "Coimbra",
    region: "Centro",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Fisioterapia"],
  },
  {
    city: "Faro",
    region: "Algarve",
    services: ["Apoio Domiciliário", "Cuidados de Saúde", "Verão"],
  },
  {
    city: "Évora",
    region: "Alentejo",
    services: ["Apoio Domiciliário", "Cuidados de Saúde"],
  },
];

export default function CoverageArea({
  title = "Cobertura Nacional - Onde Estamos Presentes",
  description = "A RCG oferece cuidados de saúde ao domicílio em todo o território de Portugal continental, com equipas locais especializadas e disponibilidade 24/7.",
  locations = defaultLocations,
}: CoverageAreaProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1140px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Coverage Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.slice(0, 9).map((location, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {location.city}
                  </h3>
                  <p className="text-sm text-muted-foreground">{location.region}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {location.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* National Coverage CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não encontra a sua cidade?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            A RCG tem cobertura nacional em Portugal continental. Contacte-nos para verificar a disponibilidade
            de serviços na sua área.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+351210136676"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <span>Telefone: 210 136 676</span>
            </a>
            <a
              href="/contactos"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <span>Contactar Equipa</span>
            </a>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-semibold text-foreground mb-3">
            Serviços Disponíveis por Localização
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A RCG fornece <strong>cuidados de saúde ao domicílio</strong> em Lisboa, Porto, Braga, Coimbra, Faro,
            Évora e restantes localidades de Portugal continental. Os nossos serviços incluem{" "}
            <strong>apoio domiciliário 24/7</strong>, <strong>cuidados de enfermagem</strong>,{" "}
            <strong>fisioterapia ao domicílio</strong>, <strong>análises clínicas</strong> (com posto de colheitas em
            Carcavelos), <strong>cuidados continuados</strong>, <strong>hospitalização domiciliária</strong> e{" "}
            <strong>equipamento hospitalar</strong>. Temos equipas locais em Lisboa, Porto, Braga, Coimbra, Faro e
            outras cidades, garantindo resposta rápida em todo o território nacional.
          </p>
        </div>
      </div>
    </section>
  );
}
