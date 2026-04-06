"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getCookie("cookie-consent");
    if (!consent) {
      // Small delay to prevent flash
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent", "accepted", { maxAge: 60 * 60 * 24 * 365 });
    setIsAnimatingOut(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleReject = () => {
    setCookie("cookie-consent", "rejected", { maxAge: 60 * 60 * 24 * 365 });
    setIsAnimatingOut(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-teal-500 shadow-lg transition-all duration-300 ${
        isAnimatingOut ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"
      }`}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1 pr-8">
            <h2 id="cookie-title" className="text-lg font-bold text-teal-600 mb-2">
              Cookies e Privacidade
            </h2>
            <p id="cookie-description" className="text-sm text-gray-700 leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do site.
              Ao clicar em "Aceitar", concorda com a utilização de cookies para fins de análise.
              Saiba mais na nossa{" "}
              <a
                href="/politica-de-privacidade"
                className="text-teal-600 hover:text-teal-700 underline font-medium"
              >
                Política de Privacidade
              </a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 flex-shrink-0 justify-end w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 bg-orange-200 text-gray-800 font-semibold rounded-md hover:bg-orange-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              aria-label="Rejeitar cookies"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Aceitar cookies"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
