import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false
});

export const config = {
  // cliente and apexpages are proxied to Salesforce Sites (see next.config.ts rewrites)
  matcher: ['/((?!api|_next|_vercel|cliente|apexpages|.*\\..*).*)']
};
