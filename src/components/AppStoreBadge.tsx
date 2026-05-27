import { APPS } from '@/lib/config';

export function AppStoreBadge({
  variant = 'primary',
  app = 'free',
  source,
  label
}: {
  variant?: 'primary' | 'dark';
  app?: 'free' | 'pro';
  source: string;
  label: string;
}) {
  const url = APPS[app].appStoreUrl;
  const cls =
    variant === 'primary'
      ? 'btn-primary'
      : 'inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 bg-black px-7 py-4 font-semibold text-ink hover:border-amber hover:text-amber transition';

  return (
    <a href={url} target="_blank" rel="noopener" className={cls} data-event="app_store_click" data-source={source}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.6 13.4c0-2.4 2-3.6 2.1-3.6-1.1-1.6-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9s-1.9-.9-3.2-.8C7.8 8 6.3 8.9 5.5 10.4c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.7 2.5 3 2.5 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.8zm-2.4-7c.7-.8 1.1-2 1-3.1-1 0-2.2.6-2.9 1.5-.6.7-1.2 2-1 3 1.1.1 2.2-.6 2.9-1.4z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
