'use client';

import { useTranslations } from 'next-intl';
import { SITE } from '@/lib/config';

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-line">
      <div className="container-x py-16 md:pl-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl uppercase tracking-tightest">
              {SITE.name}
            </p>
            <p className="mt-3 body-muted max-w-sm">{t('tagline')}</p>
          </div>
          <div className="md:text-center">
            <p className="font-mono text-[10px] uppercase tracking-ruler text-ink/50">
              {t('support').split(':')[0]}
            </p>
            <a
              href={`mailto:${t('support').split(': ')[1]}`}
              className="mt-2 inline-block font-mono text-sm text-amber hover:underline"
            >
              {t('support').split(': ')[1]}
            </a>
          </div>
          <div className="md:text-right">
            <a href="/privacy-policy-3/" className="block py-1 text-sm text-ink/80 hover:text-amber">
              {t('privacy')}
            </a>
            <a href="/terms-of-service/" className="block py-1 text-sm text-ink/80 hover:text-amber">
              {t('terms')}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-ruler text-ink/40 md:flex-row md:items-center md:justify-between">
          <span>{t('copyright')}</span>
          <span>Encrypted Data Connection</span>
        </div>
      </div>
    </footer>
  );
}
