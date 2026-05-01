"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/').filter(Boolean);

    // Remove locale segment if it exists
    if (segments[0] === 'pt' || segments[0] === 'en') {
      segments.shift();
    }

    // Build new path
    let newPath = '/' + segments.join('/');
    if (newLocale !== 'pt') {
      newPath = `/${newLocale}${newPath}`;
    }

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`
            px-2 py-1 text-sm font-medium rounded transition-colors
            ${locale === loc
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }
          `}
          aria-label={`Switch to ${loc === 'pt' ? 'Portuguese' : 'English'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
