'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { APPS } from '@/lib/config';

export function MobileStickyCta() {
  const t = useTranslations('nav');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // appear after user scrolls past 60% of viewport (i.e. past hero)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-bg/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/app-icon-free.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 flex-shrink-0 rounded-[9px]"
        />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-ink">Ruler AR</div>
          <div className="truncate font-mono text-[10px] uppercase tracking-ruler text-ink/55">
            {APPS.free.price} · iOS 16.6+
          </div>
        </div>
        <a
          href={APPS.free.appStoreUrl}
          target="_blank"
          rel="noopener"
          className="flex-shrink-0 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-black"
          data-event="app_store_click"
          data-source="mobile_sticky_bar"
        >
          {t('getApp')}
        </a>
      </div>
    </div>
  );
}
