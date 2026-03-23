import Heading from "@/components/ui/heading";

interface About2Props {
  mission?: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  doctors?: {
    image: {
      src: string;
      alt: string;
    };
    buttonText: string;
    buttonLink: string;
  };
  history?: {
    title: string;
    description: string[];
  };
}

const defaultProps: About2Props = {
  mission: {
    title: "Cuidados de qualidade para cada doente",
    description: "Proporcionamos cuidados de saúde personalizados e de excelência, adaptados às necessidades específicas de cada doente. A nossa equipa multidisciplinar está disponível 24 horas por dia, 7 dias por semana, para garantir o bem-estar e a recuperação no conforto do seu lar.",
    image: {
      src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/60.jpg",
      alt: "Cuidados de qualidade",
    },
  },
  doctors: {
    image: {
      src: "https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/51.jpg",
      alt: "A nossa equipa",
    },
    buttonText: "Nossos Médicos",
    buttonLink: "/doctors",
  },
  history: {
    title: "A Nossa História",
    description: [
      "Somos uma empresa especializada em cuidados de saúde ao domicílio, com anos de experiência no setor. A nossa trajetória começou com a visão de proporcionar cuidados de excelência no ambiente familiar do doente.",
      "Ao longo dos anos, expandimos a nossa gama de serviços para incluir fisioterapia, enfermagem, terapia da fala, podologia e análises clínicas. Colaboramos com as melhores instituições de saúde e profissionais altamente qualificados.",
      "O nosso compromisso mantém-se inabalável: garantir que cada doente receba os melhores cuidados possíveis, com dignidade, respeito e profissionalismo. Acreditamos que a recuperação é mais eficaz num ambiente familiar e acolhedor.",
    ],
  },
};

export default function About2(props: About2Props) {
  const mission = props.mission ?? defaultProps.mission!;
  const doctors = props.doctors ?? defaultProps.doctors!;
  const history = props.history ?? defaultProps.history!;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Column */}
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h6 className="text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              </h6>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={mission.image.src}
                  alt={mission.image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{mission.title}</h4>
                <p className="text-muted-foreground text-lg text-justify">{mission.description}</p>
              </div>
            </div>
          </div>

          {/* Doctors Column */}
          <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={doctors.image.src}
                alt={doctors.image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* History Column */}
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '300ms' }}>
            <div>
              <Heading as="h3">{history.title}</Heading>
            </div>
            <div className="space-y-4">
              {history.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-lg text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}