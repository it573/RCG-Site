"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
import { Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-50 w-full" style={{ top: '25px', left: 0, right: 0, height: '64px' }}>
      <div className="mx-auto px-4 max-w-full md:max-w-[80%] bg-white/75 backdrop-blur-md h-full">
        <div className="flex items-center justify-between py-4 h-full relative">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center animate-fade-in-left z-10">
            <Link href="/" onClick={handleLogoClick} className="flex items-center">
                <Image
                    src="/images/logo-transparent-final.png"
                    alt="RCG Logo"
                    width={320}
                    height={70}
                    className="w-[240px] h-auto md:w-[320px]"
                    priority
                />
            </Link>
          </div>

          {/* Navigation - Centered on desktop only */}
          <div className="hidden min-[1720px]:flex flex-1 items-center justify-center absolute left-1/2 transform -translate-x-1/2 ml-[25px] pointer-events-none">
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
              {/* Mobile: Show just icon */}
              <a
                href="tel:+351210136276"
                className="sm:hidden flex items-center px-3 md:px-4 py-0.5 bg-teal-500 text-white text-xs md:text-sm font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Navigation - Shows mobile menu button on mobile */}
            <div className="max-[1719px]:flex hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

