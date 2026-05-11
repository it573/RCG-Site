"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/routing";

const footerImages = [
  {
    src: "/images/ers.png",
    alt: "ERS - Certificado da Entidade Reguladora da Saúde",
    width: 121,
    height: 98,
  },
  {
    src: "/images/scorepme.jpg",
    alt: "ScorePME - Certificado de Qualidade",
    width: 121,
    height: 98,
  },
  {
    src: "/images/ss.png",
    alt: "Segurança Social - Certificado de Registo na Segurança Social",
    width: 121,
    height: 98,
  },
  {
    src: "/images/aepad3.png",
    alt: "AEPAD - Certificado",
    width: 121,
    height: 98,
  },
  {
    src: "/images/degeart.jpg",
    alt: "DEGEART - Certificado",
    width: 121,
    height: 98,
  },

];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const t = useTranslations('footer');

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

  const leftColumnItems = [
    { title: t('company.whoWeAre'), type: "link" as const, href: "/quem-somos" },
    { title: t('company.news'), type: "text" as const },
    { title: t('company.testimonials'), type: "link" as const, href: "/testemunhos" },
    { title: t('company.privacy'), type: "link" as const, href: "/politica-de-privacidade" },
    { title: t('company.ral'), type: "link" as const, href: "/ral" },
    { title: t('company.faq'), type: "link" as const, href: "/perguntas-frequentes" },
    { title: t('company.praiseBook'), type: "link" as const, href: "https://elogiar.livrodeelogios.com/elogiar/reabilitar-em-casa", external: true },
    { title: t('company.complaintsBook'), type: "link" as const, href: "https://www.livroreclamacoes.pt/inicio/", external: true },
  ];

  const middleColumnItems = [
    { title: t('register.recruitment'), type: "link" as const, href: "/recrutamento" },
  ];

  return (
    <footer ref={footerRef} className="bg-teal-500 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Widgets - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: REABILITAR EM CASA - Animated from left */}
          <div className="space-y-4">
            <h4
              className="text-3xl font-semibold"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1.5s ease-out",
              }}
            >
              {t('company.title')}
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xl">
              {/* Left sub-column - First 4 items */}
              <div className="space-y-3">
                {leftColumnItems.slice(0, 4).map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={index}
                        href={item.href || "#"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block hover:text-white/80 transition-colors leading-[0.95]"
                        style={{
                          transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                          opacity: isVisible ? 1 : 0,
                          transition: `all 1.5s ease-out`,
                        }}
                      >
                        {item.title}
                      </Link>
                    );
                  } else {
                    return (
                      <span
                        key={index}
                        className="block hover:text-white/80 transition-colors leading-[0.95]"
                        style={{
                          transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                          opacity: isVisible ? 1 : 0,
                          transition: `all 1.5s ease-out`,
                        }}
                      >
                        {item.title}
                      </span>
                    );
                  }
                })}
              </div>
              {/* Right sub-column - Last 4 items */}
              <div className="space-y-3">
                {leftColumnItems.slice(4).map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={index}
                        href={item.href || "#"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block hover:text-white/80 transition-colors leading-[0.95]"
                        style={{
                          transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                          opacity: isVisible ? 1 : 0,
                          transition: `all 1.5s ease-out`,
                        }}
                      >
                        {item.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {/* Column 2: REGISTE-SE - Animated from top */}
          <div className="space-y-4">
            <h4
              className="text-3xl font-semibold"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(-100px)",
                opacity: isVisible ? 1 : 0,
                transition: `all 1.5s ease-out`,
              }}
            >
              {t('register.title')}
            </h4>
            {middleColumnItems.map((item, index) => (
              <Link
                key={index}
                href={item.href || "#"}
                className="block hover:text-white/80 transition-colors leading-[0.95] text-xl"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(-100px)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 1.5s ease-out`,
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Column 3: SIGA-NOS - Animated from right */}
          <div className="space-y-4">
            <h4
              className="text-3xl font-semibold"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(100px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1.5s ease-out",
              }}
            >
              {t('followUs')}
            </h4>
            <div
              className="flex items-center gap-4"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(100px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1.5s ease-out",
              }}
            >
              <a
                href="https://www.facebook.com/ReabilitarEmCasa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={30}
                  height={15}
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.instagram.com/reabilitar.em.casa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/reabilitar-em-casa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Linkedin"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="Linkedin"
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
            // All images distributed evenly around bottom half of circle
            // 5 images distributed across 180 degrees (from 135° to 45°)
            const startAngle = 135; // bottom left
            const endAngle = 45;    // bottom right
            const angleStep = (startAngle - endAngle) / (footerImages.length - 1);
            const angle = (startAngle - index * angleStep) * (Math.PI / 180);

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
                  transition: `all 1.5s ease-out`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto max-w-[121px] rounded-md"
                />
              </div>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="text-center text-xl text-white/80">
            <p>
              {t('copyright')}
              <br />
              {t('poweredBy')} <a href="https://responsive4.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors">Responsive4 Ltd</a>
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
