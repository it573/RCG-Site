"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";

const menuItems = [
  {
    label: "Empresa",
    href: "#",
    children: [
      { label: "Quem Somos", href: "/about" },
      { label: "Recrutamento", href: "/contact" },
      { label: "Contactos", href: "/services/general-care" },
    ],
  },
  {
    label: "Apoio Domiciliário",
    href: "#",
    children: [
      { label: "Quem Somos", href: "/about" },
      { label: "Recrutamento", href: "/contact" },
      { label: "Contactos", href: "/services/general-care" },
    ],
  },
  { label: "Cuidados de Saúde", href: "/services" },
  { label: "Acordos e Convenções", href: "/appointment" },
  { label: "Equipamento Hospitalar", href: "/doctors" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center animate-fade-in-down">
        <ul className="flex items-center gap-[2.66rem]">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group flex-shrink-0"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-all duration-300 hover:scale-[1.15] ${
                  item.label === "Apoio Domiciliário" || item.label === "Cuidados de Saúde" || item.label === "Acordos e Convenções" || item.label === "Equipamento Hospitalar"
                    ? "whitespace-normal leading-tight" 
                    : "whitespace-nowrap"
                }`}
              >
                {item.label === "Apoio Domiciliário" ? (
                  <>
                    Apoio<br />Domiciliário
                  </>
                ) : item.label === "Cuidados de Saúde" ? (
                  <>
                    Cuidados<br />de Saúde
                  </>
                ) : item.label === "Acordos e Convenções" ? (
                  <>
                    Acordos e<br />Convenções
                  </>
                ) : item.label === "Equipamento Hospitalar" ? (
                  <>
                    Equipamento<br />Hospitalar
                  </>
                ) : (
                  item.label
                )}
                {item.children && (
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.children && openDropdown === item.label && (
                <>
                  {/* Invisible bridge to cover the gap */}
                  <div 
                    className="absolute top-full left-[-21px] w-64 h-[25px] z-40"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  />
                  <ul 
                    className="absolute top-full left-[-21px] mt-[25px] w-64 bg-white shadow-lg py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block pl-4 pr-12 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}

