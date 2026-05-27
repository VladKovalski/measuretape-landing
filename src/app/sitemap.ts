import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { SITE } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.map((locale) => ({
    url: locale === 'en' ? `${SITE.url}/` : `${SITE.url}/${locale}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: locale === 'en' ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, l === 'en' ? `${SITE.url}/` : `${SITE.url}/${l}/`])
      )
    }
  }));
}
