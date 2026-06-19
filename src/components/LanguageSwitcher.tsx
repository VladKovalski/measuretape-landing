'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations('languageNames');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // strip current locale prefix from pathname
  const stripped = (() => {
    if (!pathname) return '';
    const seg = pathname.split('/').filter(Boolean);
    if (seg.length && (locales as readonly string[]).includes(seg[0])) seg.shift();
    return seg.length ? '/' + seg.join('/') : '';
  })();

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-ruler text-ink/80 hover:border-amber hover:text-amber transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {locale}
        <span aria-hidden>▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[160px] overflow-hidden rounded-2xl border border-line bg-bg/95 backdrop-blur shadow-2xl"
        >
          {locales.map((l) => {
            const href = `/${l}${stripped}/`;
            return (
              <li key={l}>
                <a
                  href={href}
                  onClick={() => {
                    // Remember the deliberate choice so the root auto-detect
                    // respects it on the next visit.
                    try { localStorage.setItem('mt_locale', l); } catch {}
                  }}
                  className={`block px-4 py-2.5 text-sm transition ${
                    l === locale ? 'bg-amber/10 text-amber' : 'text-ink/85 hover:bg-white/5'
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-ruler mr-2 text-ink/50">{l}</span>
                  {t(l)}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
