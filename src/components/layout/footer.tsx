"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import PreservingLink from "@/components/ui/preserving-link";

const footerImages = [
  {
    src: "/images/ers.png",
    alt: "ERS - Certificado da Entidade Reguladora da Saúde",
    width: 201,
    height: 164,
  },
  {
    src: "/images/scorepme.jpg",
    alt: "ScorePME - Certificado de Qualidade",
    width: 201,
    height: 164,
  },
  {
    src: "/images/ss.png",
    alt: "Segurança Social - Certificado de Registo na Segurança Social",
    width: 201,
    height: 164,
  },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-teal-500 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Widgets - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: REABILITAR EM CASA */}
          <div className="space-y-4">
            <h4 className="text-3xl font-semibold">REABILITAR EM CASA</h4>
            <div className="grid grid-cols-2 gap-4 text-xl">
              <div className="space-y-3">
                <PreservingLink href="/quem-somos" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Quem Somos
                </PreservingLink>
                <span className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Notícias
                </span>
                <PreservingLink href="/testemunhos" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Testemunhos
                </PreservingLink>
                <PreservingLink href="/politica-de-privacidade" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Política de Privacidade
                </PreservingLink>
                {/* <Link href="/cookies" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Cookies
                </Link> */}
                <PreservingLink href="/ral" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  RAL
                </PreservingLink>
              </div>
              <div className="space-y-3">
                <PreservingLink href="/perguntas-frequentes" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Perguntas Frequentes
                </PreservingLink>
                <PreservingLink href="https://elogiar.livrodeelogios.com/elogiar/reabilitar-em-casa" target="_blank" rel="noopener noreferrer" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Livro de Elogios
                </PreservingLink>
                <PreservingLink href="https://www.livroreclamacoes.pt/inicio/" className="block hover:text-white/80 transition-colors leading-[0.95]">
                  Livro de Reclamações
                </PreservingLink>
              </div>
            </div>
          </div>

          {/* Column 2: REGISTE-SE */}
          <div className="space-y-4">
            <h4 className="text-3xl font-semibold">REGISTE-SE</h4>
            <div className="space-y-3 text-xl">
              <PreservingLink href="/recrutamento" className="block hover:text-white/80 transition-colors leading-[0.95]">
                Recrutamento
              </PreservingLink>
            </div>
          </div>

          {/* Column 3: SIGA-NOS */}
          <div className="space-y-4">
            <h4 className="text-3xl font-semibold">SIGA-NOS</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/fisireabilitar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image
                  src="https://reabilitar-em-casa.com/wp-content/uploads/2018/07/facebook_icon_xsmall.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.instagram.com/reabilitaremcasa.saudeemcasa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Image
                  src="https://reabilitar-em-casa.com/wp-content/uploads/2020/04/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section with Circular Animation */}
        <div className="flex flex-wrap justify-center gap-6 my-8">
          {footerImages.map((image, index) => {
            // Calculate position on circumference from bottom
            // ers.png: bottom left (135°), scorepme.jpg: bottom (90°), ss.png: bottom right (45°)
            let angle: number;
            if (index === 0) {
              // ers.png - bottom left
              angle = 135 * (Math.PI / 180);
            } else if (index === 1) {
              // scorepme.jpg - bottom
              angle = 90 * (Math.PI / 180);
            } else {
              // ss.png - bottom right
              angle = 45 * (Math.PI / 180);
            }

            const radius = 200; // Distance from center

            const startX = Math.cos(angle) * radius;
            const startY = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                style={{
                  transform: isVisible
                    ? "translate(0, 0)"
                    : `translate(${startX}px, ${startY}px)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `all 1.5s ease-out 0s`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto max-w-[201px] rounded-md"
                />
              </div>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="text-center text-xl text-white/80">
            <p>
              ©2026 Reabilitar em Casa | Prestação de Cuidados de Saúde | Todos os direitos reservados
              <br />
              Powered by <a href="https://responsive4.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors">Responsive4 Ltd</a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
