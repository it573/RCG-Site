"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Reviews3Props {
  mainImage?: {
    src: string;
    alt: string;
  };
  title?: string;
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
    src: "/images/organizations/ali.png",
    width: 150,
    height: 150,
    alt: "ALI - Associação de Lares e Casas de Repouso para Idosos",
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
    src: "/images/organizations/montepio.png",
    width: 150,
    height: 150,
    alt: "Montepio - Montepio Residências",
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

export default function Reviews3({
  mainImage = {
    src: "/images/acordos-save.png",
    alt: "Featured image",
  },
  title = "Acordos com:",
  logos = defaultLogos,
}: Reviews3Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[80%]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Image */}
          <div className="animate-fade-in-left overflow-x-hidden">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column - Logos */}
          <div className="space-y-8 animate-fade-in-right overflow-x-hidden">
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {title}
              </h3>
            </div>

            {/* Organizations Grid */}
            <div className="grid grid-cols-3 gap-6">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                >
                  <div className="relative w-full h-[80px] perspective-1000">
                    <div
                      className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
                        hoveredIndex === index ? 'rotate-y-180' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      {/* Front face - Logo */}
                      <div
                        className="absolute w-full h-full flex items-center justify-center backface-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-auto object-contain max-h-[80px]"
                        />
                      </div>

                      {/* Back face - Text */}
                      <div
                        className="absolute w-full h-full flex items-center justify-center backface-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <p className="text-xs font-semibold text-center text-foreground px-2 leading-tight">
                          {logo.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
