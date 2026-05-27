import { useTranslations } from 'next-intl';

type Item = { quote: string; author: string; rating: number };

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];

  return (
    <section className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="card dim-corners flex flex-col gap-5">
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              <div className="text-amber" aria-label={`${it.rating} stars`}>
                {'★'.repeat(it.rating)}
                <span className="text-ink/15">{'★'.repeat(5 - it.rating)}</span>
              </div>
              <blockquote className="body-muted text-base leading-relaxed">
                &ldquo;{it.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto font-mono text-[10px] uppercase tracking-ruler text-ink/50">
                {it.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
