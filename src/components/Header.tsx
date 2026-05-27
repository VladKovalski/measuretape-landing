'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { APPS } from '@/lib/config';
import type { Locale } from '@/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const base = locale === 'en' ? '' : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:pl-12">
        <Link href={`${base}/`} className="group flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-icon-free.png"
            alt="Ruler AR app icon"
            width={32}
            height={32}
            className="h-8 w-8 rounded-[7px] shadow-sm"
          />
          <span className="font-display text-xl uppercase tracking-tightest">
            Ruler<span className="text-amber">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href={`${base}/#features`} className="text-ink/80 hover:text-amber transition">{t('features')}</a>
          <a href={`${base}/#use-cases`} className="text-ink/80 hover:text-amber transition">{t('useCases')}</a>
          <a href={`${base}/#compare`} className="text-ink/80 hover:text-amber transition">{t('compare')}</a>
          <Link href={`${base}/blog/`} className="text-ink/80 hover:text-amber transition">{t('blog')}</Link>
          <a href={`${base}/#faq`} className="text-ink/80 hover:text-amber transition">{t('faq')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href={APPS.free.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex rounded-full bg-amber px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-soft"
            data-event="app_store_click"
            data-source="header"
          >
            {t('getApp')}
          </a>
        </div>
      </div>
    </header>
  );
}
