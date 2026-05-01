import Image from "next/image";
import PreservingLink from "@/components/ui/preserving-link";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Services5Props {
  services?: ServiceCard[];
}

const defaultImages = [
  "/images/higiene.jpg",
  "/images/refeicoes.jpg",
  "/images/acompanhamentoconsultas.jpg",
  "/images/medicamentos.jpg",
  "/images/conversacaocompanhia.jpg",
  "/images/24horas.jpg",
];

const defaultTitles = [
  "Higiene e Conforto\nPessoal",
  "Preparação e Acompanhamento\nde Refeições",
  "Acompanhamento a Consultas\nMédicas",
  "Acompanhamento e Assistência\nna toma da Medicação",
  "Companhia, Conversação e\nEstimulação Cognitiva",
  "Acompanhamento Permanente\n(até 24 horas)",
];

const defaultServices: ServiceCard[] = defaultImages.map((image, index) => ({
  image,
  title: defaultTitles[index],
  description: "",
  link: "#",
}));

export default function Services5({
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
              <PreservingLink href={service.link} className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="overflow-hidden aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors whitespace-pre-line">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
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
              </PreservingLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
