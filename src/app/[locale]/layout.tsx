import type { Metadata } from 'next';
import { Syne, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { SITE, SCREENSHOTS } from '@/lib/config';

// Self-hosted, preloaded fonts (next/font) — removes the render-blocking
// external Google Fonts stylesheet + third-party connection. CJK/Arabic
// scripts fall back to system fonts (these families have no such glyphs).
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap', fallback: ['system-ui', 'sans-serif'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter', display: 'swap', fallback: ['system-ui', 'sans-serif'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-jetbrains', display: 'swap', fallback: ['ui-monospace', 'monospace'] });
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileStickyCta } from '@/components/MobileStickyCta';
import { JsonLd } from '@/components/JsonLd';
import { Analytics } from '@/components/Analytics';
import { CookieConsent } from '@/components/CookieConsent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'meta' });
  const url = `${SITE.url}/${locale}/`;

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE.url}/${l}/`;
  });
  languages['x-default'] = `${SITE.url}/en/`;

  return {
    metadataBase: new URL(SITE.url),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: { canonical: url, languages },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      siteName: SITE.name,
      locale,
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t('ogAlt') }]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      site: SITE.twitter,
      images: ['/og.png']
    },
    robots: { index: true, follow: true }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${syne.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        {/* LCP image lives on Apple's CDN — preconnect + preload so it starts
            downloading immediately instead of after CSS/layout. */}
        <link rel="preconnect" href="https://is1-ssl.mzstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href={SCREENSHOTS.preciseRuler} fetchPriority="high" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="tape-rail" aria-hidden />
          <Header locale={locale as Locale} />
          <main>{children}</main>
          <Footer />
          <MobileStickyCta />
          <JsonLd locale={locale as Locale} />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
