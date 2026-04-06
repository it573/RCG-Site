"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";
import PreservingLink from "@/components/ui/preserving-link";

const menuItems = [
  { label: "Cuidados de Saúde", href: "/cuidados-de-saude" },
  {
    label: "Apoio Domiciliário",
    href: "#",
    children: [
      { label: "Apoio Domiciliário", href: "/apoio-domicilio" },
      { label: "Cuidados Continuados", href: "/cuidados-continuados-hospitalizacao" },
      { label: "Hospitalização Domiciliária", href: "/cuidados-continuados-hospitalizacao" },
    ],
  },
  { label: "Análises Clínicas", href: "/analises-clinicas" },

  { label: "Equipamento Hospitalar", href: "/equipamento-hospitalar" },
  { label: "Acordos e Convenções", href: "/acordos-convencoes" },
  {
    label: "Institucional",
    href: "#",
    children: [
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Recrutamento", href: "/recrutamento" },
      { label: "Contactos", href: "/contactos" },
    ],
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  return (
    <>
      {/* Desktop Navigation - Normal */}
      <nav className="hidden min-[1650px]:flex items-center animate-fade-in-down">
        <ul className="flex items-center gap-[2.5vw]">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group flex-shrink-0"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <PreservingLink
                href={item.href}
                className={`inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-all duration-300 hover:scale-[1.15] ${
                  item.label === "Análises Clínicas" || item.label === "Apoio Domiciliário" || item.label === "Cuidados de Saúde" || item.label === "Acordos e Convenções" || item.label === "Equipamento Hospitalar"
                    ? "whitespace-normal leading-tight"
                    : "whitespace-nowrap"
                }`}
              >
                {item.label === "Análises Clínicas" ? (
                  <>
                    Análises<br />Clínicas
                  </>
                ) : item.label === "Apoio Domiciliário" ? (
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
              </PreservingLink>

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
                      <PreservingLink
                        href={child.href}
                        className="block pl-4 pr-12 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        {child.label}
                      </PreservingLink>
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
        className="hidden max-[1649px]:flex min-h-[44px] min-w-[44px] p-3 items-center justify-center"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
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

