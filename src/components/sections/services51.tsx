import Image from "next/image";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Services5Props {
  services?: ServiceCard[];
}

const defaultServices: ServiceCard[] = [
  {
    image: "/images/clinica-geral.jpg",
    title: "Clínica Geral e Familiar",
    description: "Especialidade Médica que segue a saúde do indivíduo a longo prazo (em todos os escalões etários).",
    link: "#",
  },
  {
    image: "/images/fisioterapia.jpg",
    title: "Fisioterapia",
    description: "Tratamentos de fisioterapia e osteopatia, especializados para bebés, crianças, adultos e idosos.",
    link: "#",
  },
  {
    image: "/images/ocupacional.jpg",
    title: "Terapia Ocupacional",
    description: "Promove a capacidade do indivíduo conseguir cuidar de si próprio, quer seja nos autocuidados, quer seja nas ocupações que  podem ser tão elementares como alimentar-se ou vestir-se.",
    link: "#",
  },
 {
    image: "/images/enfermagem.jpg",
    title: "Enfermagem e Administração de Medicação",
    description: "Cuidados de Enfermagem geral e especializados. Gestão e assistência na administração de medicação.",
    link: "#",
  },
  {
    image: "/images/nutricionista.jpg",
    title: "Nutrição",
    description: "O acompanhamento especializado em nutrição, garante a alimentação variada e equilibrada, condição determinante para uma rápida recuperação.",
    link: "#",
  },
  {
    image: "/images/fala.jpg",
    title: "Terapia da Fala",
    description: "Tratamentos nas áreas da linguagem, fala, leitura e escrita, voz, articulação verbal, disfluência, motricidade orofacial e deglutição. Crianças e Adultos.",
    link: "#",
  },
];

export default function Services51({
  services = defaultServices,
}: Services5Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Image */}
                <div className="overflow-hidden aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 whitespace-pre-line">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[4.5rem] flex-shrink-0">
                    {service.description}
                  </p>

                  {/* Button
                  <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
