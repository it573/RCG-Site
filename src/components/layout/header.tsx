import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed z-50" style={{ top: '25px', left: '25px', right: '25px' }}>
      <div className="mx-auto px-4 max-w-[1140px] bg-white/75 backdrop-blur-md">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Animates from left */}
          <div className="flex-shrink-0 flex items-center animate-fade-in-left">
            <Link href="/" className="flex items-center">
              <Image
                src="https://demo.eightheme.com/paramedic/wp-content/uploads/sites/14/2022/05/logo.png"
                alt="Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
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
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
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

