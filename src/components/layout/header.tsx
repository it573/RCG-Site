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
                    src="RCG_Full_Logo_ Green" // Use this sample image or upload your own via the Media Library
                    width="160" // Transform the image: auto-crop to square aspect_ratio
                    height="35"
                    crop={{
                        type: 'scale',
                        source: true
                    }}
                    alt="RCG Logo"
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
                href="tel:+351"
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
                          <span className="font-bold">210 136 676</span>
                          <span className="font-bold">917 861 795</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </a>
              {/* Mobile: Show just icon */}
              <a
                href="tel:+351"
                className="sm:hidden flex items-center px-3 md:px-4 py-0.5 bg-teal-500 text-white text-xs md:text-sm font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
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

