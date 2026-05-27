import { useTranslations } from 'next-intl';
import { APPS } from '@/lib/config';
import { AppStoreBadge } from '../AppStoreBadge';

export function TwoApps() {
  const t = useTranslations('twoApps');

  return (
    <section className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {(['free', 'pro'] as const).map((variant) => {
            const ns = variant === 'free' ? 'free' : 'pro';
            const bullets = t.raw(`${ns}.bullets`) as string[];
            const isPro = variant === 'pro';
            const iconSrc = isPro ? '/images/app-icon-pro.png' : '/images/app-icon-free.png';
            return (
              <article
                key={variant}
                className={`card dim-corners flex flex-col gap-6 ${isPro ? 'border-amber/40 bg-amber/[0.04]' : ''}`}
              >
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconSrc}
                    alt={`${t(`${ns}.name`)} app icon`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-[14px] shadow-lg"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-ruler text-amber">
                    {t(`${ns}.label`)}
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tightest">
                  {t(`${ns}.name`)}
                </h3>
                <p className="body-muted">{t(`${ns}.tagline`)}</p>
                <ul className="space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink/85">
                      <span className="mt-1.5 h-1 w-3 flex-shrink-0 bg-amber" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <AppStoreBadge
                    variant={isPro ? 'primary' : 'dark'}
                    app={variant}
                    source={`twoapps_${variant}`}
                    label={t(`${ns}.cta`)}
                  />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-ruler text-ink/40">
                    {APPS[variant].price} · {APPS[variant].rating}★
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
