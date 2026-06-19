import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import { SITE } from '@/lib/config';
import { ITEMS, getTitle, getExcerpt } from '@/content/howto/items';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const INDEX_META: Record<Locale, { title: string; description: string; kicker: string; h1: string; intro: string; categoryLabels: Record<string, string>; }> = {
  en: {
    title: 'How to Measure Anything with Your iPhone, A Guide Library',
    description: 'Step-by-step guides to measure sofas, fridges, walls, windows, and 20+ other things using your iPhone camera. Each guide is 3-15 minutes.',
    kicker: 'Guide library',
    h1: 'How to measure anything.',
    intro: 'Twenty-plus step-by-step guides for measuring specific objects with your iPhone, from sofas to ceilings, kitchen cabinets to parking spots. Each guide is hands-on, tested, and takes 2-15 minutes to complete.',
    categoryLabels: { furniture: 'Furniture', appliance: 'Appliances', room: 'Rooms', fixture: 'Fixtures', outdoor: 'Outdoor', body: 'People & Pets', other: 'Other' }
  },
  ru: {
    title: 'Как измерить что угодно iPhone-ом, библиотека гайдов',
    description: 'Пошаговые гайды по замеру дивана, холодильника, стены, окна и ещё 20+ объектов с камерой iPhone. Каждый гайд 3-15 минут.',
    kicker: 'Библиотека гайдов',
    h1: 'Как измерить всё на свете.',
    intro: 'Двадцать с лишним пошаговых гайдов под конкретные объекты, от дивана до потолка, от кухонных шкафов до парковочных мест. Каждый практичный, проверенный, занимает 2-15 минут.',
    categoryLabels: { furniture: 'Мебель', appliance: 'Техника', room: 'Комнаты', fixture: 'Конструкции', outdoor: 'Снаружи', body: 'Люди и животные', other: 'Прочее' }
  },
  de: {
    title: 'So misst du alles mit dem iPhone, Anleitungsbibliothek',
    description: 'Schritt-für-Schritt-Anleitungen zum Messen von Sofas, Kühlschränken, Wänden, Fenstern und 20+ weiteren Objekten mit der iPhone-Kamera.',
    kicker: 'Anleitungen',
    h1: 'So misst du alles.',
    intro: 'Über zwanzig Schritt-für-Schritt-Anleitungen für bestimmte Objekte mit dem iPhone, vom Sofa bis zur Decke, von Küchenschränken bis Parkplätzen. Jede praxiserprobt, 2-15 Minuten.',
    categoryLabels: { furniture: 'Möbel', appliance: 'Geräte', room: 'Räume', fixture: 'Einbauten', outdoor: 'Draußen', body: 'Menschen & Tiere', other: 'Sonstiges' }
  },
  fr: {
    title: 'Comment tout mesurer avec votre iPhone, Bibliothèque de guides',
    description: 'Guides pas-à-pas pour mesurer canapés, frigos, murs, fenêtres et 20+ autres objets avec la caméra de votre iPhone.',
    kicker: 'Bibliothèque',
    h1: 'Comment tout mesurer.',
    intro: 'Plus de vingt guides pas-à-pas pour des objets spécifiques avec iPhone, du canapé au plafond, des armoires de cuisine aux places de parking. Chacun éprouvé sur le terrain, 2-15 minutes.',
    categoryLabels: { furniture: 'Mobilier', appliance: 'Électroménager', room: 'Pièces', fixture: 'Fixations', outdoor: 'Extérieur', body: 'Personnes & animaux', other: 'Autre' }
  },
  es: {
    title: 'Cómo medir cualquier cosa con tu iPhone, Biblioteca de guías',
    description: 'Guías paso a paso para medir sofás, neveras, paredes, ventanas y 20+ objetos más con la cámara de tu iPhone.',
    kicker: 'Biblioteca de guías',
    h1: 'Cómo medir cualquier cosa.',
    intro: 'Más de veinte guías paso a paso para objetos específicos con iPhone, desde el sofá al techo, de los armarios de cocina a las plazas de parking. Cada una probada en campo, 2-15 minutos.',
    categoryLabels: { furniture: 'Muebles', appliance: 'Electrodomésticos', room: 'Habitaciones', fixture: 'Fijos', outdoor: 'Exterior', body: 'Personas y mascotas', other: 'Otros' }
  },
  ja: {
    title: 'iPhoneで何でも測る方法、ガイドライブラリ',
    description: 'iPhoneのカメラでソファ・冷蔵庫・壁・窓ほか20以上のものを測る手順ガイド。各ガイドは3〜15分。',
    kicker: 'ガイドライブラリ',
    h1: 'iPhoneで何でも測る。',
    intro: 'ソファから天井、キッチンの戸棚から駐車スペースまで、iPhoneで特定の対象を測る20以上の手順ガイド。どれも実践的で検証済み、2〜15分で完了します。',
    categoryLabels: { furniture: '家具', appliance: '家電', room: '部屋', fixture: '建具', outdoor: '屋外', body: '人とペット', other: 'その他' }
  },
  ko: {
    title: 'iPhone로 무엇이든 측정하는 법, 가이드 라이브러리',
    description: 'iPhone 카메라로 소파·냉장고·벽·창문 등 20가지 이상을 측정하는 단계별 가이드. 각 가이드는 3~15분.',
    kicker: '가이드 라이브러리',
    h1: '무엇이든 측정하는 법.',
    intro: '소파부터 천장, 주방 수납장부터 주차 공간까지, iPhone으로 특정 대상을 측정하는 20여 개의 단계별 가이드. 모두 실전 검증을 거쳤으며 2~15분이면 끝납니다.',
    categoryLabels: { furniture: '가구', appliance: '가전', room: '방', fixture: '붙박이', outdoor: '실외', body: '사람 & 반려동물', other: '기타' }
  },
  'zh-Hans': {
    title: '用 iPhone 测量一切的方法，指南库',
    description: '用 iPhone 相机测量沙发、冰箱、墙壁、窗户等 20 多种物品的分步指南。每篇指南 3~15 分钟。',
    kicker: '指南库',
    h1: '如何测量一切。',
    intro: '二十多篇用 iPhone 测量特定物品的分步指南，从沙发到天花板，从厨柜到车位。每篇都经过实测，2~15 分钟即可完成。',
    categoryLabels: { furniture: '家具', appliance: '家电', room: '房间', fixture: '固定装置', outdoor: '户外', body: '人与宠物', other: '其他' }
  },
  'pt-BR': {
    title: 'Como medir qualquer coisa com seu iPhone, Biblioteca de guias',
    description: 'Guias passo a passo para medir sofás, geladeiras, paredes, janelas e mais de 20 outros itens com a câmera do iPhone. Cada guia leva de 3 a 15 minutos.',
    kicker: 'Biblioteca de guias',
    h1: 'Como medir qualquer coisa.',
    intro: 'Mais de vinte guias passo a passo para medir objetos específicos com o iPhone, do sofá ao teto, dos armários de cozinha às vagas de garagem. Cada um testado na prática, de 2 a 15 minutos.',
    categoryLabels: { furniture: 'Móveis', appliance: 'Eletrodomésticos', room: 'Ambientes', fixture: 'Fixos', outdoor: 'Externo', body: 'Pessoas e pets', other: 'Outros' }
  },
  it: {
    title: 'Come misurare qualsiasi cosa con l\'iPhone, Libreria di guide',
    description: 'Guide passo passo per misurare divani, frigoriferi, pareti, finestre e oltre 20 altri oggetti con la fotocamera dell\'iPhone. Ogni guida dura 3-15 minuti.',
    kicker: 'Libreria di guide',
    h1: 'Come misurare qualsiasi cosa.',
    intro: 'Oltre venti guide passo passo per misurare oggetti specifici con l\'iPhone, dal divano al soffitto, dai pensili della cucina ai posti auto. Tutte testate sul campo, 2-15 minuti.',
    categoryLabels: { furniture: 'Mobili', appliance: 'Elettrodomestici', room: 'Stanze', fixture: 'Strutture fisse', outdoor: 'Esterni', body: 'Persone e animali', other: 'Altro' }
  }
};

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();
  const m = INDEX_META[locale as Locale];
  const path = `/${locale}/how-to/`;
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE.url}/${l}/how-to/`;
  });
  languages['x-default'] = `${SITE.url}/en/how-to/`;
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

export default function HowToIndex({ params: { locale } }: { params: { locale: string } }) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const m = INDEX_META[locale as Locale];
  const base = `/${locale}`;

  // Group items by category
  const grouped = new Map<string, typeof ITEMS>();
  for (const item of ITEMS) {
    if (!grouped.has(item.category)) grouped.set(item.category, []);
    grouped.get(item.category)!.push(item);
  }
  const categoryOrder = ['furniture', 'appliance', 'room', 'fixture', 'outdoor', 'body', 'other'];

  return (
    <section className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{m.kicker}</span>
        <h1 className="title-xl mt-4 max-w-3xl">{m.h1}</h1>
        <p className="mt-6 max-w-2xl body-muted text-lg">{m.intro}</p>

        <div className="mt-14 space-y-16">
          {categoryOrder
            .filter((cat) => grouped.has(cat))
            .map((cat) => (
              <div key={cat}>
                <h2 className="font-display text-xl uppercase tracking-tightest text-amber border-b border-line pb-3">
                  {m.categoryLabels[cat]}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped.get(cat)!.map((item) => (
                    <Link
                      key={item.slug}
                      href={`${base}/how-to/${item.slug}/`}
                      className="card dim-corners group flex flex-col gap-3 no-underline"
                    >
                      <span className="corner tl" />
                      <span className="corner tr" />
                      <span className="corner bl" />
                      <span className="corner br" />
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-ruler text-ink/45">
                        <span>~{item.timeMin} min</span>
                        <span>{'●'.repeat(item.difficulty)}<span className="text-ink/15">{'●'.repeat(4 - item.difficulty)}</span></span>
                      </div>
                      <h3 className="font-display text-lg uppercase tracking-tightest text-ink group-hover:text-amber transition">
                        {getTitle(item, locale as Locale)}
                      </h3>
                      <p className="body-muted text-sm flex-1">{getExcerpt(item, locale as Locale)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
