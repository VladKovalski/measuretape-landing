'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type Item = { q: string; a: string };

export function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Item[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <div className="mt-12 max-w-4xl divide-y divide-line border-y border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl uppercase tracking-tightest pr-4">
                    {item.q}
                  </span>
                  <span className={`text-amber text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 max-w-3xl body-muted text-base leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
