import { useTranslations } from 'next-intl';

const STEPS = ['open', 'point', 'export'] as const;

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  return (
    <section id="how-it-works" className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <div key={s} className="relative pl-16 md:pl-0">
              <div className="absolute left-0 top-0 md:relative font-display text-7xl md:text-8xl text-amber/30 leading-none">
                0{i + 1}
              </div>
              <h3 className="mt-0 md:mt-4 font-display text-2xl uppercase tracking-tightest">
                {t(`steps.${s}.title`)}
              </h3>
              <p className="mt-3 body-muted">{t(`steps.${s}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
