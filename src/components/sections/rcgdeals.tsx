"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

interface LogoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface RCGDealsProps {
  title?: string;
  description?: string;
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  {
    src: "/images/organizations/acp.png",
    width: 150,
    height: 150,
    alt: "ACP - Automóvel Clube de Portugal",
  },
  {
    src: "/images/organizations/advancecare.png",
    width: 150,
    height: 150,
    alt: "ADVANCECARE - Rede Sinistrados Danos Corporais",
  },
  {
    src: "/images/organizations/ctt.png",
    width: 150,
    height: 150,
    alt: "CTT - Obras Sociais dos CTT",
  },
  {
    src: "/images/organizations/cvp.png",
    width: 150,
    height: 150,
    alt: "CVP - Cruz Vermelha Portuguesa",
  },
  {
    src: "/images/organizations/fidelidade.png",
    width: 150,
    height: 150,
    alt: "Fidelidade - Companhia de Seguros Fidelidade",
  },
  {
    src: "/images/organizations/iasfa.png",
    width: 150,
    height: 150,
    alt: "IASFA - Assistência na Doença a Militares",
  },
  {
    src: "/images/organizations/incm.png",
    width: 150,
    height: 150,
    alt: "INCM - Imprensa Nacional Casa da Moeda",
  },
  {
    src: "/images/organizations/medis.png",
    width: 150,
    height: 150,
    alt: "Médis - Rede CTT",
  },
  {
    src: "/images/organizations/multicare.png",
    width: 150,
    height: 150,
    alt: "Multicare - Rede Oncológica",
  },
  {
    src: "/images/organizations/pt-acs.png",
    width: 150,
    height: 150,
    alt: "PT-ACS - Associação de Cuidados de Saúde",
  },
  {
    src: "/images/organizations/sams.png",
    width: 150,
    height: 150,
    alt: "SAMS - Sindicato dos Quadros Técnico Bancários",
  },
  {
    src: "/images/organizations/ss-cgd.png",
    width: 150,
    height: 150,
    alt: "SS-CGD - Serviços Sociais da CGD",
  },
];

export default function RCGDeals({
  title,
  description,
  logos = defaultLogos,
}: RCGDealsProps) {
  const t = useTranslations('agreements.deals');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">{title || t('title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description || t('description')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
              style={{
                paddingTop: '75%', // 4:3 aspect ratio container
                overflow: 'hidden'
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="absolute top-0 left-0 w-full h-full p-6 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
