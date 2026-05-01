"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./language-switcher";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  menuItems,
}: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations('mobileMenu');
  const navT = useTranslations('nav');

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      onClose();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 min-w-80 max-w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" onClick={onClose} className="text-2xl font-bold text-primary">
              {t('title')}
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8">
          <ul className="space-y-2 pl-4">
            <li>
              <Link
                href="/"
                onClick={handleHomeClick}
                className="block py-3 min-h-[44px] text-xl font-medium hover:text-primary"
              >
                {navT('home')}
              </Link>
            </li>
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 min-h-[48px] text-xl font-medium"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.label ? null : item.label
                        )
                      }
                      aria-expanded={openSubmenu === item.label}
                      aria-controls={`submenu-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 ml-2 transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <ul
                        id={`submenu-${item.label}`}
                        className="pl-4 mt-2 space-y-1"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block py-3 min-h-[44px] text-lg text-muted-foreground hover:text-primary"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 min-h-[44px] text-xl font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="mt-8 pt-6 border-t border-border">
          <LanguageSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
}
