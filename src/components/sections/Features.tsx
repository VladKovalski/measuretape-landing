import { useTranslations } from 'next-intl';
import { SCREENSHOTS } from '@/lib/config';
import { PhoneMockup } from '../PhoneMockup';

const ORDER = [
  { key: 'cameraMeasure', img: SCREENSHOTS.preciseRuler, alt: 'AR camera measure on iPhone, measuring length with augmented reality' },
  { key: 'lidarRoom', img: SCREENSHOTS.room, alt: 'LiDAR 3D room scanner generating floor plan on iPhone' },
  { key: 'manualRoom', img: SCREENSHOTS.multiToolFP, alt: 'Manual room builder for iPhone without LiDAR, floor plan from corner taps' },
  { key: 'angleSquare', img: SCREENSHOTS.height, alt: 'AR angle measurement tool on iPhone' },
  { key: 'bubbleLevel', img: SCREENSHOTS.multiTool, alt: 'Digital bubble level on iPhone, spirit level for hanging frames' },
  { key: 'export', img: SCREENSHOTS.area, alt: 'PDF export and project folders for measurements' }
] as const;

export function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <p className="mt-6 max-w-2xl body-muted text-lg">{t('intro')}</p>
        <div className="mt-14 md:mt-20 flex flex-col gap-20 md:gap-36">
          {ORDER.map(({ key, img, alt }, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={key}
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-ruler text-ink/45">
                    0{i + 1} · {t(`items.${key}.subtitle`)}
                  </span>
                  <h3 className="title-xl mt-3">{t(`items.${key}.title`)}</h3>
                  <p className="mt-5 body-muted text-lg max-w-xl">{t(`items.${key}.body`)}</p>
                </div>
                <div className="relative mx-auto w-full max-w-[220px] md:max-w-xs">
                  <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-amber/10 blur-2xl" />
                  <PhoneMockup src={img} alt={alt} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
