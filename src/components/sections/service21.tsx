import Image from "next/image";

interface ServiceBox {
  title: string;
  description: string;
  image?: string;
}

interface Service2Props {
  title?: string;
  services?: ServiceBox[];
}

const defaultServices: ServiceBox[] = [
  {
    title: "No Conforto do seu Lar",
    description: "O Serviço de Apoio Domiciliário (S.A.D.) é uma resposta social organizada que consiste na prestação de cuidados individualizados e personalizados no domicílio, a indivíduos e famílias quando, por motivo de doença, deficiência ou outro impedimento, não possam assegurar temporária ou permanentemente, a satisfação das suas necessidades básicas e/ou as actividades da vida diária, contribuindo para a promoção da sua autonomia e a prevenção de situações de dependência ou seu agravamento.",
  },
  {
    title: "Carta Social",
    description: "Certifique-se que escolhe uma entidade legal, inscrita na Carta Social.\n\nA Reabilitar em Casa está!",
    image: "/images/ss-cs.jpg",
  },
];

export default function Service21({
  title = "Assistência Permanente, entidade licenciada pela Segurança Social.",
  services = defaultServices,
}: Service2Props) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary">
          {/* Left Column - Title */}
          <div className="px-8 flex items-center pb-8 md:pb-0 md:pr-8 md:pl-0 animate-fade-in-left overflow-hidden">
            <h2 className="text-3xl font-bold text-foreground leading-[0.9em]">
              {title === "Assistência Permanente, entidade licenciada pela Segurança Social." ? (
                <>
                  Assistência Permanente<br />
                  <span className="text-lg font-semibold leading-tight -mt-2 pt-[15px] block">Entidade licenciada pela Segurança Social</span>
                </>
              ) : (
                title
              )}
            </h2>
          </div>

          {/* Center Column - First Service */}
          <div className="px-8 pt-4 pb-8 md:pt-0 md:pb-0 animate-fade-in-up overflow-hidden" style={{ animationDelay: '100ms' }}>
            <h4 className="text-2xl font-semibold text-primary mb-4">
              {services[0].title}
            </h4>
            <p className="text-muted-foreground text-lg text-justify whitespace-pre-line">
              {services[0].description}
            </p>
          </div>

          {/* Right Column - Second Service */}
          <div className="px-8 pt-4 md:pt-0 animate-fade-in-up overflow-hidden" style={{ animationDelay: '200ms' }}>
            <h4 className="text-2xl font-semibold text-primary mb-4">
              {services[1].title}
            </h4>
            <p className="text-muted-foreground text-lg text-justify whitespace-pre-line">
              {services[1].description}
            </p>
            {services[1].image && (
              <div className="mt-4">
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  width={300}
                  height={200}
                  className="w-auto h-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
