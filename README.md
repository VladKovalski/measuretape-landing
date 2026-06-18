# measuretape.app — landing v2

SEO + GEO-оптимизированный лендинг для **Ruler AR** и **Ruler Pro** (iOS).
Цель — органический трафик из Google, переливаемый в App Store.

## Стек

- **Next.js 14** App Router, статический экспорт (`output: 'export'`)
- **next-intl 3** — i18n, 5 локалей: `en`, `ru`, `de`, `fr`, `es`
- **Tailwind CSS** + кастомная типографика (Syne / Inter / JetBrains Mono)
- TypeScript, React 18
- Zero runtime — деплоится как статика на Cloudflare Pages / Vercel / GitHub Pages

## Структура

```
src/
├─ app/
│  ├─ layout.tsx              # минимальный root layout (для globals.css)
│  ├─ page.tsx                # / → redirect /en
│  ├─ globals.css             # Tailwind + кастомные классы (ruler-rail, phone-frame)
│  ├─ sitemap.ts              # sitemap.xml для всех локалей
│  ├─ robots.ts               # robots.txt
│  └─ [locale]/
│     ├─ layout.tsx           # i18n provider + metadata + hreflang
│     └─ page.tsx             # композиция секций
├─ components/
│  ├─ Header, Footer, LanguageSwitcher
│  ├─ JsonLd.tsx              # SoftwareApplication × 2 + FAQPage + BreadcrumbList + Organization
│  ├─ AppStoreBadge, PhoneMockup
│  └─ sections/               # все 11 секций
├─ lib/config.ts              # APPS, SCREENSHOTS, SITE constants
└─ i18n.ts                    # next-intl config (locales array)

messages/
├─ en.json (источник)
├─ ru.json, de.json, fr.json, es.json
```

## SEO-механика

| Элемент | Где |
|---|---|
| `<title>`, `<meta description>`, OpenGraph, Twitter Card | `[locale]/layout.tsx` → `generateMetadata` |
| `hreflang` × 6 (en/ru/de/fr/es + x-default) | то же, `alternates.languages` |
| `canonical` | то же, `alternates.canonical` |
| JSON-LD `SoftwareApplication` × 2 (free/pro) с `aggregateRating` | `components/JsonLd.tsx` |
| JSON-LD `FAQPage` (9 Q&A) | то же — данные из `messages/{locale}.json` |
| JSON-LD `BreadcrumbList`, `Organization` | то же |
| `sitemap.xml` | `app/sitemap.ts` — 5 локалей с `alternates` |
| `robots.txt` | `app/robots.ts` |
| Семантический HTML (`<article>`, `<section>`, `<figure>`, h-иерархия) | секции |
| `alt` с keywords на скриншотах | `components/sections/Features.tsx` |

Все JSON-LD блоки можно проверить через [Google Rich Results Test](https://search.google.com/test/rich-results) после деплоя.

## GEO

В этой итерации заложена база:
- Полная локализация контента на 5 языков (`/`, `/ru/`, `/de/`, `/fr/`, `/es/`)
- Языковой свитчер в шапке
- В comparison-table цены и единицы адаптированы под локаль (₽ для RU, € для EU, $ для EN)

**Phase 2** (заложить, но не делать сейчас):
- Программатические подстраницы `/[locale]/contractors/`, `/[locale]/interior-design/`, `/[locale]/diy/`
- Сравнительные `/vs/apple-measure`, `/vs/magicplan`
- Блог `/blog/` для long-tail SEO (`how-to-measure-a-room-with-iphone` и т.п.)
- IP-based региональное определение `?l=ru&mt=8` для App Store ссылок
- Featured-in блок с подменой ритейлеров (Home Depot для US, Leroy Merlin для FR/RU/DE, B&Q для UK)

## Разработка

```bash
cd /Users/vladislavkovalski/measuretape-landing
npm install            # уже выполнено
npm run dev            # http://localhost:3000 → /en
npm run build          # генерирует out/
```

## Деплой

### Cloudflare Pages (рекомендация)

1. Создать новый проект в Cloudflare Pages
2. Connect to Git → выбрать репозиторий
3. Build command: `npm run build`
4. Output directory: `out`
5. Environment variables: не требуются
6. Custom domain: `measuretape.app`

### Vercel

```bash
npx vercel deploy
# или подключить через UI
```

### Статический хостинг

После `npm run build` залить содержимое `out/` на любой статический хостинг (S3 + CloudFront, Netlify, GitHub Pages).

## Контент и данные

Все маркетинговые данные приходят из:
1. `messages/{locale}.json` — тексты лендинга
2. `src/lib/config.ts` — App Store IDs, рейтинги, ссылки на скриншоты
3. Скриншоты — прямые URL с Apple CDN (`is1-ssl.mzstatic.com`), без хостинга у нас

При выходе новой версии приложения обновить:
- `APPS.free.reviewCount` и `rating` в `config.ts`
- Скриншоты в `SCREENSHOTS` (новые URL из App Store)
- `releaseNotes` упоминания в FAQ (если изменились системные требования)

## Метрики и аналитика

Все CTA на App Store имеют `data-event="app_store_click"` и `data-source="<section>"` — для GA4 / Plausible / Cloudflare Analytics нужно подвесить обработчик кликов на этот селектор.

Например (добавить в `[locale]/layout.tsx` как `<Script>`):

```js
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-event="app_store_click"]');
  if (!a) return;
  gtag('event', 'app_store_click', { source: a.dataset.source });
});
```

## Что НЕ сделано (намеренно, scope этой итерации)

- Реальный логотип бренда (используется текстовое лого "Ruler.")
- OG-картинка `/og.png` — placeholder, нужен дизайн 1200×630
- Favicon `/icon.png` — нет, нужен 512×512 PNG
- GA4 / Plausible — обработчик кликов есть в data-атрибутах, скрипт аналитики не подключён
- Видеоролики / Lottie-анимации в фичах — только статичные скриншоты (Phase 2)

## Лицензия

Proprietary. © 2026 Vladislav Kovalski.
