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
        <div className="flex items-center justify-between py-4 h-full">
          {/* Logo - Animates from left */}
          <div className="flex-shrink-0 flex items-center animate-fade-in-left">
            <Link href="/" onClick={handleLogoClick} className="flex items-center">
                <CldImage
                    src="RCG_Full_Logo_ Green" // Use this sample image or upload your own via the Media Library
                    width="160" // Transform the image: auto-crop to square aspect_ratio
                    height="40"
                    crop={{
                        type: 'auto',
                        source: true
                    }}
                    alt="RCG Logo"
                />
            </Link>
          </div>

          {/* Navigation - Animates from top */}
          <div className="flex items-center">
            <Navigation />
          </div>

          {/* Phone Number - Animates from right, Hidden on mobile */}
          <div className="hidden md:flex items-center animate-fade-in-right">
            <a
              href="tel:+123456789"
              className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+123 456 789</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

