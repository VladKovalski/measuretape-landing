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
  },
  ja: {
    title: 'ブログ · 計測のコツ、ARガイド、リフォーム解説 · measuretape.app',
    description: 'iPhoneでの計測、ARメジャーの精度、部屋スキャン、リフォーム計画に関する記事。Ruler ARの開発チームより。',
    kicker: 'フィールドノート',
    h1: '計測を、iPhone流に。',
    intro: 'Ruler ARチームによるチュートリアル・比較・現場メモ。数週間ごとに新着記事。力任せではなく、賢く測ろう。',
    readTime: '分で読了'
  },
  ko: {
    title: '블로그 · 측정 팁, AR 가이드, 리모델링 안내 · measuretape.app',
    description: 'iPhone 측정, AR 줄자 정확도, 방 스캔, 리모델링 계획에 관한 글. Ruler AR 제작팀이 전합니다.',
    kicker: '현장 노트',
    h1: '측정, iPhone 방식으로.',
    intro: 'Ruler AR 팀의 튜토리얼·비교·현장 노트. 몇 주마다 새 글이 올라옵니다. 더 힘들게가 아니라 더 똑똑하게 측정하세요.',
    readTime: '분 읽기'
  },
  'zh-Hans': {
    title: '博客 · 测量技巧、AR 指南与装修教程 · measuretape.app',
    description: '关于用 iPhone 测量、AR 卷尺精度、房间扫描和装修规划的文章。来自 Ruler AR 团队。',
    kicker: '实地笔记',
    h1: '测量，iPhone 之道。',
    intro: '来自 Ruler AR 团队的教程、对比和实地笔记。每隔几周更新新文章——更聪明地测量，而不是更费力。',
    readTime: '分钟阅读'
  },
  'pt-BR': {
    title: 'Blog · Dicas de medição, guias de RA e tutoriais de reforma · measuretape.app',
    description: 'Artigos sobre medir com o iPhone, precisão da trena em RA, escaneamento de ambientes e planejamento de reformas. Pela equipe do Ruler AR.',
    kicker: 'Notas de campo',
    h1: 'Medir, do jeito iPhone.',
    intro: 'Tutoriais, comparações e notas de campo da equipe por trás do Ruler AR. Artigos novos a cada duas semanas — meça com mais inteligência, não com mais esforço.',
    readTime: 'min de leitura'
  },
  it: {
    title: 'Blog · Consigli di misurazione, guide AR e tutorial di ristrutturazione · measuretape.app',
    description: 'Articoli su come misurare con l\'iPhone, precisione del metro in AR, scansione delle stanze e pianificazione delle ristrutturazioni. Dal team di Ruler AR.',
    kicker: 'Note sul campo',
    h1: 'Misurare, in stile iPhone.',
    intro: 'Tutorial, confronti e note sul campo dal team di Ruler AR. Nuovi articoli ogni due settimane: misura in modo più intelligente, non più faticoso.',
    readTime: 'min di lettura'
  },
  pl: {
    title: 'Blog · Porady o mierzeniu, poradniki AR i przewodniki remontowe · measuretape.app',
    description: 'Artykuły o mierzeniu iPhonem, dokładności miarki AR, skanowaniu pomieszczeń i planowaniu remontów. Od twórców Ruler AR.',
    kicker: 'Notatki z terenu',
    h1: 'Mierzenie po iPhone\'owemu.',
    intro: 'Poradniki, porównania i notatki z terenu od zespołu Ruler AR. Nowe artykuły co kilka tygodni — mierz mądrzej, nie ciężej.',
    readTime: 'min czytania'
  },
  tr: {
    title: 'Blog · Ölçüm ipuçları, AR rehberleri ve tadilat anlatımları · measuretape.app',
    description: 'iPhone ile ölçme, AR mezura doğruluğu, oda tarama ve tadilat planlaması üzerine yazılar. Ruler AR ekibinden.',
    kicker: 'Saha notları',
    h1: 'Ölçmek, iPhone tarzı.',
    intro: 'Ruler AR ekibinden eğitimler, karşılaştırmalar ve saha notları. Birkaç haftada bir yeni yazı — daha çok değil, daha akıllı ölçün.',
    readTime: 'dk okuma'
  },
  ar: {
    title: 'المدونة · نصائح القياس وأدلة الواقع المعزّز وشروحات الترميم · measuretape.app',
    description: 'مقالات عن القياس بالآيفون، ودقّة متر الواقع المعزّز، ومسح الغرف، وتخطيط الترميم. من فريق Ruler AR.',
    kicker: 'ملاحظات ميدانية',
    h1: 'القياس على طريقة الآيفون.',
    intro: 'دروس ومقارنات وملاحظات ميدانية من فريق Ruler AR. مقالات جديدة كل أسبوعين — قِس بذكاء أكبر لا بجهد أكبر.',
    readTime: 'دقيقة قراءة'
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
