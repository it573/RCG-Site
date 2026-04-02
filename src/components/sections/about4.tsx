import Image from "next/image";
import Heading from "@/components/ui/heading";

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface About2Props {
  subtitle?: string;
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    number: "",
    title: "Propósito e Visão",
    description: "Com duas décadas de dedicação, a Reabilitar em Casa nasceu de uma visão clara: transformar o Domicílio no melhor lugar para cuidar, reabilitar, curar e viver. Sempre acreditámos que a para uma boa recuperação, o bem-estar físico e emocional é indissociável do ambiente familiar. Consolidar um futuro onde os cuidados no domicílio, independentemente da idade, sejam sinónimos de dignidade, permitindo que cada pessoa receba cuidados de excelência no lugar onde se sente mais segura, a sua casa. Dignificar os cuidados domiciliários em Portugal, através da colaboração com Entidades Associativas e representativas do sector.",
  },
  {
    number: "",
    title: "Missão",
    description: "Prestar Cuidados de Saúde e Apoio Domiciliário de elevada especialização, através de uma rede estruturada e convencionada, garantindo que a recuperação e promoção da autonomia, a qualidade de vida e o conforto dos nossos utentes em ambiente familiar, com o máximo rigor clínico e humanismo.",
  },
  {
    number: "",
    title: "Valores",
    description: "Colocamos o utente no centro de todas as decisões, tratando cada indivíduo com a máxima humanidade e preservando a sua integridade no seu espaço pessoal. Excelência Clínica, Inovação, Integridade e Transparência, Proximidade Familiar e Compromisso Social",
  },
];

export default function About4({
  title = "Quem Somos",
  subtitle = "",
  description = "Somos uma equipa dedicada de profissionais de saúde comprometidos em proporcionar cuidados de excelência aos nossos doentes. A nossa missão é garantir que cada pessoa receba a melhor atenção possível, no conforto do seu lar. Com anos de experiência no setor da saúde, desenvolvemos uma abordagem centrada no doente, combinando competência técnica com humanismo. Acreditamos que os cuidados de saúde devem ser acessíveis, personalizados e prestados com dignidade e respeito.",
  image = {
    src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/43.jpg",
    alt: "Nossa Equipa",
  },
  features = defaultFeatures,
}: About2Props) {
  return (
    <section className="overflow-hidden md:py-20 md:bg-gradient-to-r md:from-orange-200 md:to-green-200" style={{ background: 'linear-gradient(to right, #fed7aa 0%, #fed7aa 50%, #dcfce7 50%, #dcfce7 100%)' }}>
      <style>{`
        @media (max-width: 768px) {
          section { background: transparent !important; }
        }
      `}</style>
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center">
          {/* Left Column */}
          <div className="relative min-h-[400px] flex items-center py-12 px-4 md:py-0 md:px-0 md:bg-transparent -mx-4 md:mx-0" style={{ backgroundColor: '#fed7aa' }}>
            {/* Background image */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden hidden md:block"
              style={{ zIndex: -1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                style={{ opacity: 0.7 }}
                sizes="(max-width: 768px) 0vw, 100vw"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 space-y-6 w-full px-4 md:px-0">
              <div className="animate-fade-in-left overflow-hidden">
                <h6 className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {subtitle}
                </h6>
              </div>
              <div className="animate-fade-in-left overflow-hidden" style={{ animationDelay: '100ms' }}>
                <Heading as="h2">{title}</Heading>
              </div>
              <div className="animate-fade-in-up overflow-hidden" style={{ animationDelay: '200ms' }}>
                <p className="text-muted-foreground text-lg text-justify">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8 py-12 px-4 md:py-0 md:px-0 md:bg-transparent -mx-4 md:mx-0" style={{ backgroundColor: '#dcfce7' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 items-start animate-fade-in-right overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <h3 className="text-5xl font-bold text-primary/20">
                    {feature.number}
                  </h3>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-lg text-justify leading-[1.2] whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
