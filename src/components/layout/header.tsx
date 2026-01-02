"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
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
    <header className="fixed z-50" style={{ top: '25px', left: '25px', right: '25px', height: '64px' }}>
      <div className="mx-auto px-4 max-w-[1140px] bg-white/75 backdrop-blur-md h-full">
        <div className="flex items-center justify-between py-4 h-full relative">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center animate-fade-in-left z-10">
            <Link href="/" onClick={handleLogoClick} className="flex items-center">
                <CldImage
                    src="RCG_Full_Logo_ Green"
                    width="160"
                    height="35"
                    crop={{
                        type: 'scale',
                        source: true
                    }}
                    alt="RCG Logo"
                    priority
                    sizes="160px"
                    quality={90}
                />
            </Link>
          </div>

          {/* Navigation - Centered on desktop only */}
          <div className="hidden md:flex flex-1 items-center justify-center absolute left-1/2 transform -translate-x-1/2 pointer-events-none">
            <div className="pointer-events-auto">
              <Navigation />
            </div>
          </div>

          {/* Right side: Phone button and Navigation (mobile menu) */}
          <div className="flex items-center gap-3 flex-shrink-0 z-10">
            {/* Phone Number - Visible on all screens, appears before mobile menu */}
            <div className="flex items-center animate-fade-in-right">
              <a
                href="tel:+123456789"
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-teal-500 text-white text-xs md:text-sm font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">+123 456 789</span>
              </a>
            </div>

            {/* Navigation - Shows mobile menu button on mobile */}
            <div className="md:hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
