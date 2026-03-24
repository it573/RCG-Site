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
    number: "01",
    title: "Propósito e Visão",
    description: "Cuidamos de cada pessoa com dignidade, respeito e empatia",
  },
  {
    number: "02",
    title: "Missão",
    description: "Compromisso com os mais altos padrões de qualidade profissional",
  },
  {
    number: "03",
    title: "Valores",
    description: "Colaboração estreita entre profissionais e familiares do doente",
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
    <section className="overflow-x-hidden md:py-20 md:bg-gradient-to-r md:from-orange-200 md:to-green-200" style={{ background: 'linear-gradient(to right, #fed7aa 0%, #fed7aa 50%, #dcfce7 50%, #dcfce7 100%)' }}>
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
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.7 }}
              />
            </div>

            <div className="relative z-10 space-y-6 w-full px-4 md:px-0">
              <div className="animate-fade-in-left overflow-x-hidden">
                <h6 className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {subtitle}
                </h6>
              </div>
              <div className="animate-fade-in-left overflow-x-hidden" style={{ animationDelay: '100ms' }}>
                <Heading as="h2">{title}</Heading>
              </div>
              <div className="animate-fade-in-up overflow-x-hidden" style={{ animationDelay: '200ms' }}>
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
                className="flex gap-6 items-start animate-fade-in-right overflow-x-hidden"
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
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section 
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Os Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
}