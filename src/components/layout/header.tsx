import Link from "next/link";
import Navigation from "./navigation";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Paramedic
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Phone Number - Hidden on mobile */}
          <div className="hidden md:flex items-center">
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

