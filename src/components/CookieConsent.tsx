'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

type Choice = 'granted' | 'denied' | null;

/**
 * GDPR/ePrivacy cookie-consent banner.
 *
 * On first visit (no stored choice) the banner is shown and NO analytics load
 * (see Analytics.tsx). "Accept" / "Decline" are equally prominent. The choice
 * is stored in localStorage `mt_consent` and broadcast on `mt-consent-changed`.
 * A subtle persistent link lets users re-open the banner to withdraw consent
 * (withdrawal must be as easy as granting it).
 */
export function CookieConsent() {
  const t = useTranslations('consent');
  const [choice, setChoice] = useState<Choice>('granted'); // optimistic: hide until mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const v = localStorage.getItem('mt_consent');
      setChoice(v === 'granted' || v === 'denied' ? v : null);
    } catch {
      setChoice(null);
    }
  }, []);

  const decide = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem('mt_consent', value);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent('mt-consent-changed', { detail: value }));
    setChoice(value);
  };

  if (!mounted) return null;

  // Choice already made → show only the subtle "Cookie settings" re-open link.
  if (choice === 'granted' || choice === 'denied') {
    return (
      <button
        type="button"
        onClick={() => decideReopen(setChoice)}
        className="fixed bottom-3 left-3 z-40 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-ruler text-ink/45 backdrop-blur transition hover:text-amber hover:border-amber/40"
        aria-label={t('manage')}
      >
        {t('manage')}
      </button>
    );
  }

  // No choice yet → consent banner.
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('manage')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 backdrop-blur px-4 py-4 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink/80 leading-relaxed max-w-2xl">
          {t('message')}{' '}
          <a href="/privacy-policy-3/" className="text-amber underline hover:no-underline">
            {t('privacy')}
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink/80 transition hover:border-ink/40"
          >
            {t('reject')}
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-soft"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}

// Clearing the stored choice re-shows the banner (consent withdrawal).
function decideReopen(setChoice: (c: Choice) => void) {
  try {
    localStorage.removeItem('mt_consent');
  } catch {
    /* ignore */
  }
  // Treat re-open as immediate opt-out until a fresh choice is made.
  window.dispatchEvent(new CustomEvent('mt-consent-changed', { detail: 'denied' }));
  setChoice(null);
}
