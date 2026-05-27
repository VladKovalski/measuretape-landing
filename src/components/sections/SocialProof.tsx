import { useTranslations } from 'next-intl';

export function SocialProof() {
  const t = useTranslations('socialProof');
  const stats = ['stat1', 'stat2', 'stat3', 'stat4'] as const;
  const tags = t.raw('useTags') as string[];

  return (
    <section className="border-b border-line bg-white/[0.015] py-14">
      <div className="container-x md:pl-12">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((k) => (
            <div key={k} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl text-amber tracking-tightest">
                {t(`${k}.value`)}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-ruler text-ink/55">
                {t(`${k}.label`)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-line pt-6">
          <p className="font-display text-lg md:text-2xl uppercase tracking-tightest text-ink/85 max-w-3xl">
            {t('ratingHeadline')}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
