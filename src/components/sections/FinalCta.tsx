import { useTranslations } from 'next-intl';
import { AppStoreBadge } from '../AppStoreBadge';

export function FinalCta() {
  const t = useTranslations('finalCta');
  const title = t('title');
  const lines = title.split('\n');

  return (
    <section className="bg-amber text-black py-28 md:py-36">
      <div className="container-x md:pl-12">
        <h2 className="headline-massive text-black">
          {lines.map((l, i) => (
            <span key={i}>
              {l}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-black/75">{t('subtitle')}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://apps.apple.com/app/id1279285953"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-amber hover:bg-black/85 transition"
            data-event="app_store_click"
            data-source="finalcta_free"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.6 13.4c0-2.4 2-3.6 2.1-3.6-1.1-1.6-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9s-1.9-.9-3.2-.8C7.8 8 6.3 8.9 5.5 10.4c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.7 2.5 3 2.5 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.8zm-2.4-7c.7-.8 1.1-2 1-3.1-1 0-2.2.6-2.9 1.5-.6.7-1.2 2-1 3 1.1.1 2.2-.6 2.9-1.4z" />
            </svg>
            {t('primary')}
          </a>
          <a
            href="https://apps.apple.com/app/id1672750252"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 font-semibold text-black hover:bg-black hover:text-amber transition"
            data-event="app_store_click"
            data-source="finalcta_pro"
          >
            {t('secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
