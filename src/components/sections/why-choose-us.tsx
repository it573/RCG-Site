import Image from "next/image";
import Heading from "@/components/ui/heading";
import Badge from "@/components/ui/badge";
import ImageBox from "@/components/ui/image-box";

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: Feature[];
  backgroundImage?: string;
}

const defaultFeatures: Feature[] = [
  {
    number: "01",
    title: "Excelência Clínica",
    description: "Equipa multidisciplinar licenciada pela Entidade Reguladora da Saúde (ERS) e Segurança Social, garantindo cuidados de saúde de elevada qualidade.",
  },
  {
    number: "02",
    title: "Cuidados Personalizados",
    description: "Planos de cuidados adaptados às necessidades específicas de cada cliente, com acompanhamento individualizado e disponibilidade 24 horas por dia.",
  },
  {
    number: "03",
    title: "Padrões de Qualidade",
    description: "Protocolos rigorosos de qualidade e segurança, cumprimos todas as normas legais e regulamentares para cuidados de saúde e apoio domiciliário.",
  },
];

export default function WhyChooseUs({
  badge = "Saúde",
  title = "Por Que Escolher a RCG",
  description = "Somos líderes em cuidados de saúde ao domicílio em Portugal, com equipa licenciada, disponibilidade 24/7 e compromisso com a excelência.",
  features = defaultFeatures,
  backgroundImage,
}: WhyChooseUsProps) {
  return (
    <section className="py-20 relative">
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt="Equip RCG - Cuidados de saúde de excelência"
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge>{badge}</Badge>
            <Heading as="h2">{title}</Heading>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-3xl font-bold text-primary">
                  {feature.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
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

