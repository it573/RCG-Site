"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Widgets - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: REABILITAR EM CASA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">REABILITAR EM CASA</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <Link href="/quemsomos" className="block hover:text-white/80 transition-colors">
                  Quem Somos
                </Link>
                <Link href="/testemunhos" className="block hover:text-white/80 transition-colors">
                  Testemunhos
                </Link>
                <Link href="/covid-19" className="block hover:text-white/80 transition-colors">
                  COVID-19
                </Link>
                <Link href="/contactos" className="block hover:text-white/80 transition-colors">
                  Contactos
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="/politica-de-privacidade" className="block hover:text-white/80 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/faqs" className="block hover:text-white/80 transition-colors">
                  Perguntas Frequentes
                </Link>
                <Link href="/contactos" className="block hover:text-white/80 transition-colors">
                  Livro de Reclamações
                </Link>
                <div className="mt-4">
                  <a
                    href="https://elogiar.livrodeelogios.com/elogiar/reabilitar-em-casa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src="https://livrodeelogios.com/assets/back-logo.svg"
                      alt="Livro de Elogios"
                      width={120}
                      height={40}
                      className="h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: REGISTE-SE */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">REGISTE-SE</h4>
            <div className="space-y-2 text-sm">
              <Link href="/recrutamento" className="block hover:text-white/80 transition-colors">
                Recrutamento
              </Link>
            </div>
          </div>

          {/* Column 3: SIGA-NOS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">SIGA-NOS</h4>
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
                href="https://www.linkedin.com/in/reabilitar-em-casa-lda-84a7a9106/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Image
                  src="https://reabilitar-em-casa.com/wp-content/uploads/2020/02/LinkedIn-Icon-e1581553039519.png"
                  alt="LinkedIn"
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

        {/* Gallery Section */}
        <div className="flex flex-wrap justify-center gap-6 my-8">
          <Image
            src="https://reabilitar-em-casa.com/wp-content/uploads/2018/07/ERS_footer_com_licenca.png"
            alt="ERS"
            width={201}
            height={164}
            className="h-auto max-w-[201px]"
          />
          <Image
            src="https://reabilitar-em-casa.com/wp-content/uploads/2020/01/ScorePME2019-1.jpg"
            alt="ScorePME"
            width={201}
            height={164}
            className="h-auto max-w-[201px]"
          />
          <Image
            src="https://reabilitar-em-casa.com/wp-content/uploads/2018/07/IGFSS3_footer_com_licenca.png"
            alt="Segurança Social"
            width={201}
            height={164}
            className="h-auto max-w-[201px]"
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="text-center text-sm text-white/80">
            <p>
              ©2004 Reabilitar em Casa | Prestação de Cuidados de Saúde | Todos os direitos reservados
              <br />
              Powered by Responsive4 Ltd
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
