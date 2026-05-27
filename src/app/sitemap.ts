import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { SITE } from '@/lib/config';
import { POSTS } from '@/content/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Locale roots
  for (const locale of locales) {
    entries.push({
      url: `${SITE.url}/${locale}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: locale === 'en' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}/`]))
      }
    });
  }

  // Blog indexes
  for (const locale of locales) {
    entries.push({
      url: `${SITE.url}/${locale}/blog/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7
    });
  }

  // Blog posts
  for (const locale of locales) {
    for (const { meta } of POSTS) {
      entries.push({
        url: `${SITE.url}/${locale}/blog/${meta.slug}/`,
        lastModified: new Date(meta.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}/blog/${meta.slug}/`]))
        }
      });
    }
  }

  return entries;
}
