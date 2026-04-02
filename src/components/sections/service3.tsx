import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
}

interface Service3Props {
  subtitle?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
}

// Define service data without any component references
const serviceData: ServiceItem[] = [
  {
    title: "Check-Up Personalizado",
    description: "Específicos, Gerais, para quem procura fazer uma avaliação de parâmetros de saúde e estilos de vida. ",
  },
  {
    title: "Testes de Nutrição",
    description: "Descubra como sua alimentação impacta sua saúde e o seu bem-estar geral.",
  },
  {
    title: "Testes de Bem-Estar",
    description: "Análise do bio-ritmo e alterações do sono. Medição de níveis de cortisol e DHA-S (avaliação do stress). Diagnóstico de enxaqueca, entre outros.",
  },
  {
    title: "Testes da Saúde Gastro-Intestinal",
    description: "Microbioma intestinal, Intolerâncias Alimentares, avaliação da Microbiota intestinal, sobrecrescimento bacteriano intestinal.",
  },
  {
    title: "Saúde da Mulher",
    description: "Avaliação hormonal, ciclo menstrual, fertilidade, gravidez e menopausa.",
  },
  {
    title: "Analises Clínicas ao Domícilio",
    description: "Para todos os que preferem realizar a colheita no conforto da sua casa, disponibilizamos um serviço de análises clínicas ao domicílio",
  },
];

export default function Service3({
  subtitle = "",
  title = "Análises Clínicas Especializadas",
  description = "",
  backgroundImage = "/images/blood-test.jpg",
}: Service3Props) {
  return (
    <section className="relative py-20 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Análises clínicas em laboratório moderno"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* White overlay with 60% opacity */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" style={{ zIndex: -5 }} />
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="grid md:grid-cols-[25%_75%] gap-20">
          {/* Left Subsection - Image */}
          <div className="hidden md:flex items-center justify-center h-full">
            <Image
              src="/images/synlab-window.png"
              alt="Synlab Window"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              sizes="(max-width: 768px) 0vw, 25vw"
              loading="lazy"
            />
          </div>

          {/* Right Subsection - All Content */}
          <div className="space-y-12">
            {/* Text Content */}
            <div className="text-left space-y-6 animate-fade-in-right">
              {/* Subtitle */}
              <p className="text-primary font-semibold uppercase tracking-wide text-sm">
                {subtitle}
              </p>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl text-foreground">
                {title}
              </h2>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            {serviceData.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Title */}
                  <h5 className="text-[25px] text-foreground font-semibold mb-2 leading-[1.125]">
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </a>
                  </h5>

                  {/* Description */}
                  <p className="text-xl text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
