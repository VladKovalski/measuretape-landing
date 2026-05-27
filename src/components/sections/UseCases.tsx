import { useTranslations } from 'next-intl';

const KEYS = ['contractors', 'designers', 'diy', 'realEstate', 'furniture', 'everyday'] as const;
const ICONS: Record<(typeof KEYS)[number], string> = {
  contractors: '⚒',
  designers: '◐',
  diy: '✦',
  realEstate: '⌂',
  furniture: '▤',
  everyday: '◇'
};

export function UseCases() {
  const t = useTranslations('useCases');

  return (
    <section id="use-cases" className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <p className="mt-6 max-w-2xl body-muted text-lg">{t('intro')}</p>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {KEYS.map((k, idx) => (
            <article key={k} className="card dim-corners">
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              <div className="flex items-center justify-between">
                <span className="text-amber text-3xl leading-none">{ICONS[k]}</span>
                <span className="font-mono text-[10px] uppercase tracking-ruler text-ink/35">
                  N°{String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-tightest">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-3 body-muted">{t(`items.${k}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
