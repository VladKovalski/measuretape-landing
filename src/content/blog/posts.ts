/**
 * Blog post registry.
 *
 * To add a new post:
 *   1. Create `src/content/blog/<slug>.tsx` exporting a default React component
 *      (a `<article>` with prose content) + a `meta` named export.
 *   2. Import it here and add to the `POSTS` array.
 *
 * Posts are statically generated at build time for every locale in `locales`.
 * For locales without a translation, the EN version is served (the slug is shared).
 */

import type { ComponentType } from 'react';
import type { Locale } from '@/i18n';

export interface PostMeta {
  slug: string;
  /** Per-locale title; falls back to EN if locale missing */
  title: Partial<Record<Locale, string>>;
  /** Per-locale 1-2 sentence summary; used in list + meta description */
  excerpt: Partial<Record<Locale, string>>;
  /** YYYY-MM-DD */
  date: string;
  /** Estimated reading time in minutes */
  readingTimeMin: number;
  /** Hero image URL (absolute or /-rooted) — optional */
  cover?: string;
  /** SEO keywords (comma-separated) */
  keywords?: string;
  /** Tags shown on the post list */
  tags?: string[];
  /** Locales for which a translation exists. EN is implicit. */
  localesAvailable?: Locale[];
}

export type PostModule = {
  default: ComponentType;
  meta: PostMeta;
};

import * as howToMeasureRoom from './how-to-measure-a-room-with-iphone';
import * as accuracyGuide from './ar-tape-measure-accuracy-guide';
import * as bestApps from './best-ar-measure-apps-iphone-2026';
import * as renovationPlanner from './plan-renovation-with-iphone';

export const POSTS: PostModule[] = [
  howToMeasureRoom as PostModule,
  accuracyGuide as PostModule,
  bestApps as PostModule,
  renovationPlanner as PostModule
];

export function getPost(slug: string): PostModule | undefined {
  return POSTS.find((p) => p.meta.slug === slug);
}

export function getLocalizedTitle(meta: PostMeta, locale: Locale): string {
  return meta.title[locale] ?? meta.title.en ?? meta.slug;
}

export function getLocalizedExcerpt(meta: PostMeta, locale: Locale): string {
  return meta.excerpt[locale] ?? meta.excerpt.en ?? '';
}
