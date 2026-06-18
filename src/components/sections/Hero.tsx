import { useTranslations } from 'next-intl';
import { SCREENSHOTS } from '@/lib/config';
import { AppStoreBadge } from '../AppStoreBadge';
import { PhoneMockup } from '../PhoneMockup';

export function Hero() {
  const t = useTranslations('hero');
  const title = t('title');
  const lines = title.split('\n');

  return (
    <section className="relative border-b border-line pt-12 md:pt-32 pb-16 md:pb-28">
      <div className="container-x md:pl-12">
        <div className="flex items-center gap-3">
          <span className="tape-marker">{t('label')}</span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h1 className="headline-massive">
              {lines.map((l, i) => (
                <span key={i} className={i === lines.length - 1 ? 'text-amber' : ''}>
                  {l}
                  {i < lines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <AppStoreBadge source="hero" label={t('primaryCta')} />
              <a href="#how-it-works" className="btn-ghost">
                {t('secondaryCta')}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-ruler text-ink/55">
              <span className="hidden sm:inline text-amber/70">┤</span>
              <span>{t('trust')}</span>
              <span className="hidden sm:inline text-amber/70">├</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm hero-mockup-wrap viewfinder">
            <span className="vf-tr" />
            <span className="vf-bl" />
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-amber/20 via-transparent to-transparent blur-3xl" />
            <PhoneMockup src={SCREENSHOTS.preciseRuler} alt="Ruler AR app, AR tape measure on iPhone showing live distance measurement" />
            {/* Floating measurement annotation pointing at the screen */}
            <div className="dim-callout hidden lg:flex">
              <div className="dim-callout-line" />
              <span className="dim-label">10.00 cm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
