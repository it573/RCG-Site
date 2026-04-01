"use client";

import Image from "next/image";

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
  title = "Acordos",
  description = "Temos acordos com as principais seguradoras e substistemas.",
  logos = defaultLogos,
}: RCGDealsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {logos.map((logo) => (
            <div key={logo.alt} className="aspect-square flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" style={{ minWidth: '120px', maxWidth: '150px' }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
