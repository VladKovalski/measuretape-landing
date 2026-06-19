import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { SITE, APPS } from '@/lib/config';
import {
  ITEMS,
  getItem,
  getTitle,
  getExcerpt,
  getIntro,
  getArr,
  type Step,
  type FaqItem
} from '@/content/howto/items';
import { AppStoreBadge } from '@/components/AppStoreBadge';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const item of ITEMS) {
      params.push({ locale, slug: item.slug });
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
  const item = getItem(slug);
  if (!item) notFound();

  const title = getTitle(item, locale as Locale);
  const desc = getExcerpt(item, locale as Locale);
  const path = `/${locale}/how-to/${slug}/`;
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE.url}/${l}/how-to/${slug}/`;
  });
  return {
    title: `${title} · measuretape.app`,
    description: desc,
    keywords: item.keywords,
    alternates: { canonical: `${SITE.url}${path}`, languages },
    openGraph: { title, description: desc, url: `${SITE.url}${path}`, type: 'article' }
  };
}

const SECTION_LABELS: Record<Locale, {
  why: string;
  need: string;
  steps: string;
  tips: string;
  mistakes: string;
  faq: string;
  related: string;
  back: string;
  difficulty: string;
  time: string;
  cta: string;
  appCta: string;
}> = {
  en: { why: 'Why measure this', need: 'What you need', steps: 'Step by step', tips: 'Tips', mistakes: 'Common mistakes', faq: 'Frequently asked', related: 'Related guides', back: '← All guides', difficulty: 'Difficulty', time: 'Time', cta: 'Get Ruler AR, Free', appCta: 'Start measuring in 60 seconds' },
  ru: { why: 'Зачем замерять', need: 'Что нужно', steps: 'Пошагово', tips: 'Советы', mistakes: 'Типичные ошибки', faq: 'Частые вопросы', related: 'Связанные гайды', back: '← Все гайды', difficulty: 'Сложность', time: 'Время', cta: 'Установить Ruler AR, бесплатно', appCta: 'Начни измерять за 60 секунд' },
  de: { why: 'Warum messen', need: 'Was du brauchst', steps: 'Schritt für Schritt', tips: 'Tipps', mistakes: 'Häufige Fehler', faq: 'Häufige Fragen', related: 'Verwandte Anleitungen', back: '← Alle Anleitungen', difficulty: 'Schwierigkeit', time: 'Zeit', cta: 'Ruler AR holen, kostenlos', appCta: 'In 60 Sekunden loslegen' },
  fr: { why: 'Pourquoi mesurer', need: "Ce qu'il vous faut", steps: 'Étape par étape', tips: 'Conseils', mistakes: 'Erreurs fréquentes', faq: 'Questions fréquentes', related: 'Guides connexes', back: '← Tous les guides', difficulty: 'Difficulté', time: 'Temps', cta: 'Obtenir Ruler AR, gratuit', appCta: 'Commencez en 60 secondes' },
  es: { why: 'Por qué medir', need: 'Qué necesitas', steps: 'Paso a paso', tips: 'Consejos', mistakes: 'Errores comunes', faq: 'Preguntas frecuentes', related: 'Guías relacionadas', back: '← Todas las guías', difficulty: 'Dificultad', time: 'Tiempo', cta: 'Obtener Ruler AR, gratis', appCta: 'Empieza en 60 segundos' },
  ja: { why: 'なぜ測るのか', need: '必要なもの', steps: 'ステップごとに', tips: 'コツ', mistakes: 'よくある間違い', faq: 'よくある質問', related: '関連ガイド', back: '← すべてのガイド', difficulty: '難易度', time: '所要時間', cta: 'Ruler ARを無料で入手', appCta: '60秒で計測を始める' },
  ko: { why: '왜 측정하나', need: '준비물', steps: '단계별 안내', tips: '팁', mistakes: '흔한 실수', faq: '자주 묻는 질문', related: '관련 가이드', back: '← 모든 가이드', difficulty: '난이도', time: '소요 시간', cta: 'Ruler AR 무료로 받기', appCta: '60초 만에 측정 시작' },
  'zh-Hans': { why: '为什么测量', need: '需要准备', steps: '分步操作', tips: '小贴士', mistakes: '常见错误', faq: '常见问题', related: '相关指南', back: '← 所有指南', difficulty: '难度', time: '耗时', cta: '免费获取 Ruler AR', appCta: '60 秒开始测量' },
  'pt-BR': { why: 'Por que medir isto', need: 'O que você precisa', steps: 'Passo a passo', tips: 'Dicas', mistakes: 'Erros comuns', faq: 'Perguntas frequentes', related: 'Guias relacionados', back: '← Todos os guias', difficulty: 'Dificuldade', time: 'Tempo', cta: 'Baixar o Ruler AR, grátis', appCta: 'Comece a medir em 60 segundos' },
  it: { why: 'Perché misurare', need: 'Cosa ti serve', steps: 'Passo dopo passo', tips: 'Consigli', mistakes: 'Errori comuni', faq: 'Domande frequenti', related: 'Guide correlate', back: '← Tutte le guide', difficulty: 'Difficoltà', time: 'Tempo', cta: 'Ottieni Ruler AR, gratis', appCta: 'Inizia a misurare in 60 secondi' },
  pl: { why: 'Po co to mierzyć', need: 'Czego potrzebujesz', steps: 'Krok po kroku', tips: 'Wskazówki', mistakes: 'Częste błędy', faq: 'Częste pytania', related: 'Powiązane poradniki', back: '← Wszystkie poradniki', difficulty: 'Trudność', time: 'Czas', cta: 'Pobierz Ruler AR, za darmo', appCta: 'Zacznij mierzyć w 60 sekund' },
  tr: { why: 'Neden ölçülür', need: 'Gerekenler', steps: 'Adım adım', tips: 'İpuçları', mistakes: 'Sık yapılan hatalar', faq: 'Sık sorulanlar', related: 'İlgili rehberler', back: '← Tüm rehberler', difficulty: 'Zorluk', time: 'Süre', cta: 'Ruler AR\'ı ücretsiz al', appCta: '60 saniyede ölçmeye başla' },
  ar: { why: 'لماذا تقيس هذا', need: 'ما تحتاجه', steps: 'خطوة بخطوة', tips: 'نصائح', mistakes: 'أخطاء شائعة', faq: 'أسئلة متكررة', related: 'أدلة ذات صلة', back: '← كل الأدلة', difficulty: 'الصعوبة', time: 'الوقت', cta: 'احصل على Ruler AR مجانًا', appCta: 'ابدأ القياس في 60 ثانية' }
};

export default function HowToPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const item = getItem(slug);
  if (!item) notFound();

  const L = locale as Locale;
  const labels = SECTION_LABELS[L];
  const base = `/${locale}`;

  const title = getTitle(item, L);
  const excerpt = getExcerpt(item, L);
  const intro = getIntro(item, L);
  const whyMeasure = getArr(item, 'whyMeasure', L) as string[];
  const whatYouNeed = getArr(item, 'whatYouNeed', L) as string[];
  const steps = getArr(item, 'steps', L) as Step[];
  const tips = getArr(item, 'tips', L) as string[];
  const mistakes = getArr(item, 'commonMistakes', L) as string[];
  const faq = getArr(item, 'faq', L) as FaqItem[];

  // Related: pick from explicit related[] + same category
  const related = (() => {
    const explicit = (item.related ?? []).map(getItem).filter(Boolean);
    if (explicit.length >= 3) return explicit.slice(0, 3) as typeof ITEMS;
    const sameCategory = ITEMS.filter((i) => i.category === item.category && i.slug !== item.slug);
    const merged = [...explicit, ...sameCategory] as typeof ITEMS;
    const seen = new Set<string>();
    return merged.filter((i) => i && !seen.has(i.slug) && seen.add(i.slug)).slice(0, 3);
  })();

  // HowTo schema JSON-LD
  const howToLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: excerpt,
    totalTime: `PT${item.timeMin}M`,
    inLanguage: locale,
    tool: whatYouNeed,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body
    })),
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    about: { '@type': 'SoftwareApplication', name: APPS.free.name, url: APPS.free.appStoreUrl }
  }).replace(/</g, '\\u003c');

  const faqLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }).replace(/</g, '\\u003c');

  return (
    <article className="section">
      <div className="container-x md:pl-12 max-w-4xl">
        <Link href={`${base}/how-to/`} className="inline-flex items-center font-mono text-[10px] uppercase tracking-ruler text-amber hover:underline">
          {labels.back}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-ruler text-ink/45">
          <span>{labels.time}: ~{item.timeMin} min</span>
          <span>·</span>
          <span>
            {labels.difficulty}: <span className="text-amber">{'●'.repeat(item.difficulty)}</span>
            <span className="text-ink/15">{'●'.repeat(4 - item.difficulty)}</span>
          </span>
        </div>

        <h1 className="title-xl mt-6">{title}</h1>
        <p className="mt-5 text-xl body-muted max-w-3xl">{excerpt}</p>

        <div className="prose-wrap mt-12">
          <div className="prose-content">
            <p className="lead">{intro}</p>

            {whyMeasure.length > 0 && (
              <>
                <h2>{labels.why}</h2>
                <ul>
                  {whyMeasure.map((w, i) => (<li key={i}>{w}</li>))}
                </ul>
              </>
            )}

            {whatYouNeed.length > 0 && (
              <>
                <h2>{labels.need}</h2>
                <ul>
                  {whatYouNeed.map((w, i) => (<li key={i}>{w}</li>))}
                </ul>
              </>
            )}

            {steps.length > 0 && (
              <>
                <h2>{labels.steps}</h2>
                <ol>
                  {steps.map((s, i) => (
                    <li key={i}>
                      <strong>{s.title}.</strong> {s.body}
                    </li>
                  ))}
                </ol>
              </>
            )}

            {tips.length > 0 && (
              <>
                <h2>{labels.tips}</h2>
                <ul>
                  {tips.map((t, i) => (<li key={i}>{t}</li>))}
                </ul>
              </>
            )}

            {mistakes.length > 0 && (
              <>
                <h2>{labels.mistakes}</h2>
                <ul>
                  {mistakes.map((m, i) => (<li key={i}>{m}</li>))}
                </ul>
              </>
            )}

            {faq.length > 0 && (
              <>
                <h2>{labels.faq}</h2>
                {faq.map((f, i) => (
                  <div key={i}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </>
            )}
          </div>
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
              <p className="font-mono text-[10px] uppercase tracking-ruler text-ink/55">{labels.appCta}</p>
            </div>
          </div>
          <AppStoreBadge source={`howto_${slug}`} label={labels.cta} />
        </aside>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl uppercase tracking-tightest">{labels.related}</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`${base}/how-to/${r.slug}/`} className="card dim-corners flex flex-col gap-3 no-underline">
                  <span className="corner tl" />
                  <span className="corner tr" />
                  <span className="corner bl" />
                  <span className="corner br" />
                  <span className="font-mono text-[10px] uppercase tracking-ruler text-ink/45">~{r.timeMin} min</span>
                  <h3 className="font-display text-base uppercase tracking-tightest">{getTitle(r, L)}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${howToLd}</script><script type="application/ld+json">${faqLd}</script>` }} />
    </article>
  );
}
