import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { SITE, APPS } from '@/lib/config';
import { POSTS, getPost, getLocalizedTitle, getLocalizedExcerpt } from '@/content/blog/posts';
import { AppStoreBadge } from '@/components/AppStoreBadge';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const { meta } of POSTS) {
      params.push({ locale, slug: meta.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();
  const post = getPost(slug);
  if (!post) notFound();

  const title = getLocalizedTitle(post.meta, locale as Locale);
  const desc = getLocalizedExcerpt(post.meta, locale as Locale);
  const path = `/${locale}/blog/${slug}/`;

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE.url}/${l}/blog/${slug}/`;
  });

  return {
    title: `${title} · measuretape.app`,
    description: desc,
    keywords: post.meta.keywords,
    alternates: { canonical: `${SITE.url}${path}`, languages },
    openGraph: {
      title,
      description: desc,
      url: `${SITE.url}${path}`,
      type: 'article',
      publishedTime: post.meta.date
    }
  };
}

const STRINGS: Record<Locale, { back: string; readMore: string; getApp: string; appCta: string; relatedTitle: string; }> = {
  en: { back: '← All articles', readMore: 'Continue reading', getApp: 'Get Ruler AR, Free', appCta: 'Try the app while you read', relatedTitle: 'Keep reading' },
  ru: { back: '← Все статьи', readMore: 'Читать дальше', getApp: 'Установить Ruler AR, Бесплатно', appCta: 'Попробуй приложение пока читаешь', relatedTitle: 'Читать ещё' },
  de: { back: '← Alle Artikel', readMore: 'Weiterlesen', getApp: 'Ruler AR holen, kostenlos', appCta: 'App ausprobieren beim Lesen', relatedTitle: 'Weiterlesen' },
  fr: { back: '← Tous les articles', readMore: 'Continuer la lecture', getApp: 'Obtenir Ruler AR, gratuit', appCta: "Essayer l'app pendant la lecture", relatedTitle: 'À lire ensuite' },
  es: { back: '← Todos los artículos', readMore: 'Seguir leyendo', getApp: 'Obtener Ruler AR, gratis', appCta: 'Prueba la app mientras lees', relatedTitle: 'Sigue leyendo' }
};

export default function PostPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) notFound();

  const t = STRINGS[locale as Locale];
  const base = `/${locale}`;
  const Component = post.default;

  const related = POSTS.filter((p) => p.meta.slug !== slug).slice(0, 3);

  const articleLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: getLocalizedTitle(post.meta, locale as Locale),
    description: getLocalizedExcerpt(post.meta, locale as Locale),
    datePublished: post.meta.date,
    inLanguage: locale,
    keywords: post.meta.keywords,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.png` } },
    mainEntityOfPage: `${SITE.url}/${locale}/blog/${slug}/`,
    image: `${SITE.url}/opengraph-image`,
    about: { '@type': 'SoftwareApplication', name: APPS.free.name }
  }).replace(/</g, '\\u003c');

  return (
    <article className="section">
      <div className="container-x md:pl-12 max-w-4xl">
        <Link
          href={`${base}/blog/`}
          className="inline-flex items-center font-mono text-[10px] uppercase tracking-ruler text-amber hover:underline"
        >
          {t.back}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-ruler text-ink/45">
          <time dateTime={post.meta.date}>{post.meta.date}</time>
          <span aria-hidden>·</span>
          <span>{post.meta.readingTimeMin} {locale === 'ru' ? 'мин' : locale === 'fr' ? 'min de lecture' : 'min read'}</span>
          {post.meta.tags?.map((tag) => (
            <span key={tag}>
              <span aria-hidden className="mr-3">·</span>{tag}
            </span>
          ))}
        </div>

        <h1 className="title-xl mt-6">{getLocalizedTitle(post.meta, locale as Locale)}</h1>
        <p className="mt-5 text-xl body-muted max-w-3xl">{getLocalizedExcerpt(post.meta, locale as Locale)}</p>

        <div className="mt-10 prose-wrap">
          <Component />
        </div>

        <aside className="mt-14 card dim-corners flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/app-icon-free.png" alt="Ruler AR" width={56} height={56} className="rounded-[12px]" />
            <div>
              <p className="font-display text-xl uppercase tracking-tightest">Ruler AR</p>
              <p className="font-mono text-[10px] uppercase tracking-ruler text-ink/55">{t.appCta}</p>
            </div>
          </div>
          <AppStoreBadge source={`blog_${slug}`} label={t.getApp} />
        </aside>

        <section className="mt-20">
          <h2 className="font-display text-2xl uppercase tracking-tightest">{t.relatedTitle}</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map(({ meta }) => (
              <Link
                key={meta.slug}
                href={`${base}/blog/${meta.slug}/`}
                className="card dim-corners flex flex-col gap-3 no-underline"
              >
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
                <time className="font-mono text-[10px] uppercase tracking-ruler text-ink/45" dateTime={meta.date}>{meta.date}</time>
                <h3 className="font-display text-base uppercase tracking-tightest">{getLocalizedTitle(meta, locale as Locale)}</h3>
                <span className="mt-auto text-xs text-amber">{t.readMore} →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${articleLd}</script>` }} />
    </article>
  );
}
