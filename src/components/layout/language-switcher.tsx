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

  // Determine the target locale and display text
  const targetLocale: Locale = locale === 'pt' ? 'en' : 'pt';
  const displayText = locale === 'pt' ? 'EN' : 'PT';

  return (
    <button
      onClick={() => switchLocale(targetLocale)}
      className="text-sm font-bold hover:text-primary transition-all duration-300 hover:scale-[1.15] whitespace-nowrap"
      aria-label={`Switch to ${targetLocale === 'pt' ? 'Portuguese' : 'English'}`}
    >
      {displayText}
    </button>
  );
}
