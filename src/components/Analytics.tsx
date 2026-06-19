'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Analytics loader — GDPR/ePrivacy compliant.
 *
 * NOTHING tracking-related (Google Analytics, Microsoft Clarity) loads until
 * the user has explicitly granted consent via the CookieConsent banner. The
 * consent state lives in localStorage (`mt_consent`) and is broadcast on the
 * `mt-consent-changed` window event so this component reacts without a reload.
 * Default (no choice / declined) = no scripts, no cookies, no session recording.
 */
export function Analytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    try {
      setGranted(localStorage.getItem('mt_consent') === 'granted');
    } catch {
      /* storage blocked — stay opted out */
    }
    const onChange = (e: Event) => {
      setGranted((e as CustomEvent<string>).detail === 'granted');
    };
    window.addEventListener('mt-consent-changed', onChange);
    return () => window.removeEventListener('mt-consent-changed', onChange);
  }, []);

  // App Store CTA click tracking — only forwards if a vendor is actually loaded.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        '[data-event="app_store_click"]'
      );
      if (!target) return;
      const source = target.dataset.source || 'unknown';
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'app_store_click', { source });
      }
      if (typeof window !== 'undefined' && window.clarity) {
        window.clarity('event', 'app_store_click');
        window.clarity('set', 'cta_source', source);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (!granted || (!GA_ID && !CLARITY_ID)) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });
            `}
          </Script>
        </>
      )}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
