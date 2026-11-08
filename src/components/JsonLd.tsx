import { getTranslations } from 'next-intl/server';
import { APPS, SITE } from '@/lib/config';
import type { Locale } from '@/i18n';

/**
 * Structured data optimized for both traditional SEO (Google rich snippets)
 * and Generative Engine Optimization (AI agents reading schema.org as
 * canonical truth about the app).
 *
 * AI-specific signals added vs minimal schema:
 *  - audience: explicit target user types LLMs can match queries against
 *  - featureList: discoverable feature catalogue
 *  - applicationSubCategory: more specific than just "UtilitiesApplication"
 *  - keywords: scenarios LLMs may match
 *  - WebSite with SearchAction → Google sitelinks search box and AI-readable
 *  - Organization sameAs → connects identities across platforms
 */
export async function JsonLd({ locale }: { locale: Locale }) {
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  const faqItems = tFaq.raw('items') as { q: string; a: string }[];

  const softwareApp = (k: 'free' | 'pro') => ({
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MobileApplication'],
    '@id': `${SITE.url}/#app-${k}`,
    name: APPS[k].name,
    alternateName: k === 'free' ? ['Ruler AR', 'Ruler AR: AI Tape Measure Cam', 'Tape Measure Tools', 'Tape Tools Ruler', 'Ruler AR AI Tape Measure'] : ['Ruler Pro'],
    identifier: APPS[k].bundleId,
    sameAs: [APPS[k].appStoreUrl],
    description:
      k === 'free'
        ? 'AR tape measure for iPhone, free to download. Measure length, area, and angles with your camera. Room scans, height, and plan export may need a subscription. Manual room floor plan builder on every iPhone Xs+. Free with optional Pro features.'
        : 'Paid AR tape measure for iPhone. One purchase, no subscription, no ads.',
    operatingSystem: k === 'free' ? 'iOS 16.6, iPadOS 16.6' : 'iOS 15.6, iPadOS 15.6',
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'MeasurementApplication',
    softwareVersion: k === 'free' ? '5.3' : '4.0',
    fileSize: k === 'free' ? '35 MB' : '15 MB',
    inLanguage: ['en', 'ru', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'ko', 'zh', 'ar', 'tr', 'pl', 'nl', 'da', 'nb', 'fi', 'el', 'id', 'ms'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: APPS[k].rating.toString(),
      reviewCount: APPS[k].reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      price: APPS[k].price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    url: APPS[k].appStoreUrl,
    downloadUrl: APPS[k].appStoreUrl,
    installUrl: APPS[k].appStoreUrl,
    publisher: { '@type': 'Person', name: 'Vladislav Kovalski', email: 'vladkovalski@gmail.com' },
    author: { '@type': 'Person', name: 'Vladislav Kovalski' },
    featureList: k === 'pro' ? ['AR camera measurement', 'Digital bubble level', 'No ads', 'One-time purchase'] : [
      'AR camera measurement (length, height, area, perimeter)',
      'LiDAR 3D room scanner (iPhone 12 Pro and newer)',
      'Manual floor plan builder (works without LiDAR)',
      'Angle measurement with AR protractor',
      'Digital bubble level (vertical, horizontal, free-rotation)',
      'Touch Mode for sub-centimetre precision',
      'Material calculator (paint, tile, flooring, wallpaper, baseboard)',
      'PDF export with floor plan and dimensions',
      'USDZ 3D model export',
      'Project folders with notes and photos',
      'Auto-save drafts',
      '20 language support'
    ],
    audience: {
      '@type': 'PeopleAudience',
      name: 'Contractors, interior designers, real estate agents, DIY renovators, architects, furniture shoppers'
    },
    keywords:
      'tape measure app, AR ruler, iPhone measure app, LiDAR room scanner, AR tape measure, measuring app, floor plan app, distance measurement app, how to measure room iphone, ar measure app, digital ruler, augmented reality measurement, room scanner ar, indoor measurement, ar protractor, digital level app'
  });

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
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
        item: `${SITE.url}/${locale}/`
      }
    ]
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.png`, width: 180, height: 180 },
    sameAs: [
      APPS.free.appStoreUrl,
      APPS.pro.appStoreUrl,
      'https://github.com/VladKovalski'
    ],
    founder: { '@type': 'Person', name: 'Vladislav Kovalski' },
    knowsAbout: [
      'augmented reality measurement',
      'iPhone tape measure apps',
      'LiDAR room scanning',
      'ARKit',
      'RoomPlan',
      'floor plan generation',
      'AR measurement accuracy',
      'home renovation measurement',
      'construction site survey'
    ]
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: locale,
    publisher: { '@id': `${SITE.url}/#organization` }
  };

  // Static JSON-LD payload (typed config, no user input), safe stringify.
  const payload = [softwareApp('free'), softwareApp('pro'), faqPage, breadcrumb, organization, website]
    .map((b) => JSON.stringify(b).replace(/</g, '\\u003c'))
    .join('</script><script type="application/ld+json">');

  const html = `<script type="application/ld+json">${payload}</script>`;

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
