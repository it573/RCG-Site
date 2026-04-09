"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
import { Phone } from "lucide-react";
import PreservingLink from "@/components/ui/preserving-link";

export default function Header() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-50 w-full top-0 left-0 right-0 overflow-hidden" style={{ height: '64px' }}>
      <div className="mx-auto max-w-full bg-white/75 backdrop-blur-md h-full">
        <div className="flex items-center justify-between py-4 h-full relative w-full min-w-0 px-[2.25%]">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center animate-fade-in-left z-10">
            <PreservingLink href="/" onClick={handleLogoClick} className="flex items-center">
                <Image
                    src="/images/logo-transparent-final-greenv6.png"
                    alt="RCG Logo"
                    width={352}
                    height={77}
                    className="w-[209px] h-auto md:w-[317px]"
                    priority
                    fetchPriority="high"
                    quality={90}
                />
            </PreservingLink>
          </div>

          {/* Navigation - Centered on desktop only */}
          <div className="hidden min-[1650px]:flex flex-1 items-center justify-center absolute left-1/2 transform -translate-x-1/2 ml-[50px] pointer-events-none">
            <div className="pointer-events-auto">
              <Navigation />
            </div>
          </div>

          {/* Right side: Phone button and Navigation (mobile menu) */}
          <div className="flex items-center gap-3 flex-shrink-0 z-10">
            {/* Phone Number - Visible on all screens, appears before mobile menu */}
            <div className="flex items-center animate-fade-in-right">
              <a
                href="tel:+351210136276"
                className="hidden sm:flex items-center px-3 md:px-4 py-1 bg-teal-500 text-white text-xs md:text-sm font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                <table className="border-collapse">
                  <tbody>
                    <tr>
                      <td className="align-middle pr-2">
                        <Phone className="w-6 h-6" />
                      </td>
                      <td className="align-middle">
                        <div className="flex flex-col leading-none">
                          <span className="font-bold tracking-tighter">210 136 676</span>
                          <span className="font-bold tracking-tighter">917 861 795</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </a>
              {/* Mobile: Heart-shaped call button */}
              <a
                href="tel:+351210136276"
                className="sm:hidden block w-10 h-10 relative hover:opacity-80 transition-opacity"
                style={{
                  animation: 'heartbeat 1.5s ease-in-out infinite'
                }}
                aria-label="Ligar agora"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-teal-500 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <Phone className="absolute left-1/2 -translate-x-1/2 top-[10px] w-4 h-4 text-white pointer-events-none" />
              </a>
            </div>

            {/* Navigation - Shows mobile menu button on mobile */}
            <div className="max-[1649px]:flex hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

