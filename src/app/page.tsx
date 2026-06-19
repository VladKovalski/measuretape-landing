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
  var raw = (navigator.language || 'en').toLowerCase();
  var two = raw.slice(0,2);
  // Region-specific locales first (full tag), then base-language fallback.
  var map = { 'zh': 'zh-Hans', 'pt': 'pt-BR' };
  var supported = ['en','ru','de','fr','es','ja','ko','it'];
  var target = 'en';
  if (map[two]) target = map[two];
  else if (supported.indexOf(two) > -1) target = two;
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
