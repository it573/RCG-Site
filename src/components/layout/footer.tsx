import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Paramedic
            </Link>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold uppercase">New York</h6>
            <p className="text-sm text-gray-400">
              Paradise Road 70, Office 99, NYC 10010
            </p>
            <h6 className="text-sm font-semibold uppercase mt-6">New Jersey</h6>
            <p className="text-sm text-gray-400">
              Malioboro Road 70, Xurang 99, NJ 08701
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold uppercase">Get in touch</h6>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet. Email us:{" "}
              <a href="mailto:para@me.dic" className="text-white hover:underline">
                para@me.dic
              </a>
            </p>
            <h6 className="text-sm font-semibold uppercase mt-6">Talk to us</h6>
            <p className="text-sm text-gray-400">
              <a href="tel:+123456789" className="text-white hover:underline">
                +123 456 789
              </a>
            </p>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h6 className="text-sm font-semibold uppercase">Help</h6>
            <p className="text-sm text-gray-400">
              Visit <Link href="/help" className="text-white hover:underline">Help Center</Link>
            </p>
            <h6 className="text-sm font-semibold uppercase mt-6">Career</h6>
            <p className="text-sm text-gray-400">
              <Link href="/careers" className="text-white hover:underline">
                Available Positions
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm text-center text-gray-400">
            Powered by Design8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

