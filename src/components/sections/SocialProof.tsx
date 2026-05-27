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
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
          <span className="font-mono text-[10px] uppercase tracking-ruler text-ink/45">
            {t('ratingHeadline')}
          </span>
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
