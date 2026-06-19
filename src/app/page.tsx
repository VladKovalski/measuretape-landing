import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: SITE.name,
  description: 'Redirecting…',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/en/` }
};

const REDIRECT_SCRIPT = `
try {
  var all = ['en','ru','de','fr','es','ja','ko','zh-Hans','pt-BR','it','pl','tr','ar'];
  var target = 'en';
  // 1) Honor a previously chosen language (set by the language switcher).
  var saved = localStorage.getItem('mt_locale');
  if (saved && all.indexOf(saved) > -1) {
    target = saved;
  } else {
    // 2) Otherwise auto-detect from the browser language.
    var raw = (navigator.language || 'en').toLowerCase();
    var two = raw.slice(0,2);
    var map = { 'zh': 'zh-Hans', 'pt': 'pt-BR' }; // region-specific full tags
    var base = ['en','ru','de','fr','es','ja','ko','it','pl','tr','ar'];
    if (map[two]) target = map[two];
    else if (base.indexOf(two) > -1) target = two;
  }
  location.replace('/' + target + '/');
} catch(e) { location.replace('/en/'); }
`;

/**
 * Root page. Performs a client-side + meta-refresh redirect to the locale-prefixed
 * English home, necessary because output: 'export' has no server-side redirects.
 * Real users get sent to /<browser-lang>/ immediately; bots see noindex + canonical hint.
 */
export default function RootRedirect() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <link rel="canonical" href={`${SITE.url}/en/`} />
        <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      </head>
      <body style={{ background: '#0a0a0a', color: '#888', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <p>
          <a href="/en/" style={{ color: '#ffb400' }}>Redirecting to measuretape.app…</a>
        </p>
      </body>
    </html>
  );
}
