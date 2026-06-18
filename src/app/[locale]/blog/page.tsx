import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { SITE } from '@/lib/config';
import { POSTS, getLocalizedTitle, getLocalizedExcerpt } from '@/content/blog/posts';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const BLOG_META: Record<Locale, { title: string; description: string; kicker: string; h1: string; intro: string; readTime: string; }> = {
  en: {
    title: 'Blog · Measuring tips, AR guides, and renovation walkthroughs, measuretape.app',
    description: 'Articles on measuring with your iPhone, AR tape measure accuracy, room scanning, and renovation planning. By the makers of Ruler AR.',
    kicker: 'Field notes',
    h1: 'Measuring, the iPhone way.',
    intro: 'Tutorials, comparisons, and field notes from the team behind Ruler AR. New articles every couple of weeks, measure smarter, not harder.',
    readTime: 'min read'
  },
  ru: {
    title: 'Блог · Гайды по измерениям, AR и ремонту, measuretape.app',
    description: 'Статьи о том, как измерять iPhone-ом, точности AR-рулетки, сканировании комнат и планировании ремонта. От команды Ruler AR.',
    kicker: 'Полевые заметки',
    h1: 'Измерения по-новому.',
    intro: 'Туториалы, сравнения и заметки от команды Ruler AR. Новые статьи раз в две недели, измеряйте умнее, а не дольше.',
    readTime: 'мин чтения'
  },
  de: {
    title: 'Blog · Mess-Tipps, AR-Guides und Renovierungs-Walkthroughs, measuretape.app',
    description: 'Artikel zum Messen mit iPhone, Genauigkeit von AR-Maßbändern, Raumscan und Renovierungsplanung. Von den Machern von Ruler AR.',
    kicker: 'Praxisnotizen',
    h1: 'Messen, neu gedacht.',
    intro: 'Tutorials, Vergleiche und Praxisnotizen vom Team hinter Ruler AR. Neue Artikel alle paar Wochen, smarter messen, nicht härter.',
    readTime: 'Min Lesezeit'
  },
  fr: {
    title: 'Blog · Astuces de mesure, guides AR et tutoriels de rénovation, measuretape.app',
    description: 'Articles sur la mesure avec iPhone, la précision AR, le scan de pièces et la planification de rénovation. Par l\'équipe Ruler AR.',
    kicker: 'Notes terrain',
    h1: 'Mesurer, mode iPhone.',
    intro: 'Tutoriels, comparatifs et notes de terrain de l\'équipe Ruler AR. De nouveaux articles toutes les deux semaines, mesurez plus malin.',
    readTime: 'min de lecture'
  },
  es: {
    title: 'Blog · Consejos de medición, guías AR y tutoriales de reforma, measuretape.app',
    description: 'Artículos sobre medir con iPhone, precisión de cinta métrica AR, escaneo de habitaciones y planificación de reformas. Del equipo de Ruler AR.',
    kicker: 'Notas de campo',
    h1: 'Medir, al estilo iPhone.',
    intro: 'Tutoriales, comparativas y notas de campo del equipo de Ruler AR. Artículos nuevos cada dos semanas, mide más inteligente.',
    readTime: 'min lectura'
  }
};

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();
  const m = BLOG_META[locale as Locale];
  const path = `/${locale}/blog/`;
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE.url}/${l}/blog/`;
  });
  languages['x-default'] = `${SITE.url}/en/blog/`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${SITE.url}${path}`, languages },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE.url}${path}`,
      type: 'website'
    }
  };
}

export default function BlogIndex({ params: { locale } }: { params: { locale: string } }) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const m = BLOG_META[locale as Locale];
  const base = `/${locale}`;

  const posts = [...POSTS].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

  return (
    <section className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{m.kicker}</span>
        <h1 className="title-xl mt-4 max-w-3xl">{m.h1}</h1>
        <p className="mt-6 max-w-2xl body-muted text-lg">{m.intro}</p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ meta: post }) => (
            <Link
              key={post.slug}
              href={`${base}/blog/${post.slug}/`}
              className="card dim-corners group flex flex-col gap-4 no-underline"
            >
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-ruler text-ink/45">
                <time dateTime={post.date}>{post.date}</time>
                <span>
                  {post.readingTimeMin} {m.readTime}
                </span>
              </div>
              <h2 className="font-display text-xl uppercase tracking-tightest text-ink group-hover:text-amber transition">
                {getLocalizedTitle(post, locale as Locale)}
              </h2>
              <p className="body-muted text-sm flex-1">{getLocalizedExcerpt(post, locale as Locale)}</p>
              {post.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 text-[10px] uppercase tracking-ruler text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
