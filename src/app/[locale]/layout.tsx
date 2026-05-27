import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { SITE } from '@/lib/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileStickyCta } from '@/components/MobileStickyCta';
import { JsonLd } from '@/components/JsonLd';
import { Analytics } from '@/components/Analytics';

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
  const path = locale === 'en' ? '' : `/${locale}`;
  const url = `${SITE.url}${path}/`;

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = l === 'en' ? `${SITE.url}/` : `${SITE.url}/${l}/`;
  });
  languages['x-default'] = `${SITE.url}/`;

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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400&display=swap"
        />
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
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
