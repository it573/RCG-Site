"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { useTranslations } from 'next-intl';
import PreservingLink from "@/components/ui/preserving-link";
import { LanguageSwitcher } from "./language-switcher";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations('nav');

  const menuItems = [
    { label: t('healthcare'), href: "/cuidados-de-saude" },
    {
      label: t('homeSupport'),
      href: "#",
      children: [
        { label: t('homeSupport'), href: "/apoio-domicilio" },
        { label: t('continuedCare'), href: "/cuidados-continuados-hospitalizacao" },
        { label: t('homeHospitalization'), href: "/cuidados-continuados-hospitalizacao" },
      ],
    },
    { label: t('clinicalAnalysis'), href: "/analises-clinicas" },

    { label: t('hospitalEquipment'), href: "/equipamento-hospitalar" },
    { label: t('agreements'), href: "/acordos-convencoes" },
    {
      label: t('institutional'),
      href: "#",
      children: [
        { label: t('whoWeAre'), href: "/quem-somos" },
        { label: t('recruitment'), href: "/recrutamento" },
        { label: t('contact'), href: "/contactos" },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Navigation - Normal */}
      <nav className="hidden min-[1650px]:flex items-center">
        <ul className="flex items-center gap-[4vw]">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group flex-shrink-0 animate-fade-in-down"
              style={{
                animationDelay: "0s",
              }}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <PreservingLink
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-all duration-300 hover:scale-[1.15] whitespace-nowrap"
              >
                {item.label}
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
          {/* Language Switcher as last menu item */}
          <li className="flex-shrink-0 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-all duration-300 hover:scale-[1.15] whitespace-nowrap">
              <LanguageSwitcher />
            </div>
          </li>
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
