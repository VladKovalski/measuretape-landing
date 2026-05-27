import { getTranslations } from 'next-intl/server';
import { APPS, SITE } from '@/lib/config';
import type { Locale } from '@/i18n';

export async function JsonLd({ locale }: { locale: Locale }) {
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  const faqItems = tFaq.raw('items') as { q: string; a: string }[];

  const softwareApp = (k: 'free' | 'pro') => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APPS[k].name,
    operatingSystem: 'iOS 16.6+',
    applicationCategory: 'UtilitiesApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: APPS[k].rating.toString(),
      reviewCount: APPS[k].reviewCount.toString()
    },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: APPS[k].appStoreUrl,
    publisher: { '@type': 'Person', name: 'Vladislav Kovalski' }
  });

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a }
    }))
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url + (locale === 'en' ? '/' : `/${locale}/`)
      }
    ]
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: SITE.url + '/icon.png',
    sameAs: [APPS.free.appStoreUrl, APPS.pro.appStoreUrl]
  };

  // Static JSON-LD payload (typed config, no user input) — safe stringify.
  const payload = [softwareApp('free'), softwareApp('pro'), faqPage, breadcrumb, organization]
    .map((b) => JSON.stringify(b).replace(/</g, '\\u003c'))
    .join('</script><script type="application/ld+json">');

  const html = `<script type="application/ld+json">${payload}</script>`;

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
