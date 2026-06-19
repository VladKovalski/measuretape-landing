import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ru', 'de', 'fr', 'es', 'ja', 'ko', 'zh-Hans', 'pt-BR', 'it', 'pl', 'tr', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
