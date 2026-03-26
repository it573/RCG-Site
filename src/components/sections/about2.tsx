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
    title: "Pioneiros em Cuidados de Saúde no Domícilio em Portugal",
    description: "Com quase duas décadas de dedicação, a Reabilitar em Casa nasceu de uma visão clara: transformar o domicílio no melhor lugar para cuidar, curar e viver. Somos pioneiros em Portugal na prestação de cuidados de saúde personalizados, acreditando que o bem-estar físico e emocional é indissociável do ambiente familiar.",
    image: {
      src: "/images/fachada2.jpg",
      alt: "Cuidados de qualidade",
    },
  },
  doctors: {
    image: {
      src: "/images/rita.jpg",
      alt: "A nossa equipa",
    },
    buttonText: "Nossos Médicos",
    buttonLink: "/doctors",
  },
  history: {
    title: "A Nossa História",
    description: [
      "Somos uma empresa especializada em cuidados de saúde ao domicílio, com quase duas décadas de experiência no setor. A nossa trajetória começou com a visão de proporcionar cuidados de excelência no ambiente familiar de cada pessoa. A Reabilitar em Casa é pioneira na prestação de Cuidados de Saúde e Serviços de Apoio Domiciliário (SAD) em Portugal. Esta organização foi a primeira no país a celebrar convenções com múltiplos subsistemas públicos e privados, assegurando uma resposta nacional e estruturada às necessidades das pessoas no conforto do(s) seu(s) domicílio(s). Desde a nossa fundação, o nosso percurso tem sido pautado pela excelência clínica levada ao ambiente familiar. O que começou como uma visão de cuidados de proximidade transformou-se numa estrutura completa de saúde domiciliária sem igual. Ao longo dos anos, expandimos os nossos serviços com o intuito de satisfazer as necessidades dos nossos utentes e famílias. Colaboramos com as melhores instituições de saúde, criámos parcerias e, os profissionais  que connosco colaboram são altamente qualificados. O nosso compromisso mantém-se inabalável: garantir que cada utente recebe os melhores cuidados, com dignidade, respeito e profissionalismo. Acreditamos que a recuperação é mais eficaz num ambiente familiar, seguro e acolhedor."
    ],
  },
};

export default function About2(props: About2Props) {
  const mission = props.mission ?? defaultProps.mission!;
  const doctors = props.doctors ?? defaultProps.doctors!;
  const history = props.history ?? defaultProps.history!;

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Mission Column */}
          <div className="space-y-6 animate-fade-in-left overflow-x-hidden">
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
          <div className="animate-fade-in-up overflow-x-hidden" style={{ animationDelay: '150ms' }}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={doctors.image.src}
                alt={doctors.image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* History Column */}
          <div className="space-y-6 animate-fade-in-right overflow-x-hidden" style={{ animationDelay: '300ms' }}>
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