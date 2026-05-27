import { useTranslations } from 'next-intl';

export function Compare() {
  const t = useTranslations('compare');
  const headers = t.raw('headers') as string[];
  const rows = t.raw('rows') as string[][];

  const renderCell = (val: string, col: number) => {
    if (col === 0) return <span className="text-ink">{val}</span>;
    if (val === 'yes')
      return <span className="text-amber" aria-label="yes">●</span>;
    if (val === 'no')
      return <span className="text-ink/30" aria-label="no">○</span>;
    return <span className="text-ink/70 text-sm">{val}</span>;
  };

  return (
    <section id="compare" className="section">
      <div className="container-x md:pl-12">
        <span className="kicker">{t('kicker')}</span>
        <h2 className="title-xl mt-4 max-w-3xl">{t('title')}</h2>
        <p className="mt-6 max-w-2xl body-muted text-lg">{t('intro')}</p>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-line">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-white/[0.03]">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-4 md:px-6 py-5 text-left font-mono text-[10px] uppercase tracking-ruler ${
                      i === 1 ? 'text-amber' : 'text-ink/60'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-t border-line">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 md:px-6 py-4 text-center ${ci === 0 ? 'text-left' : ''} ${
                        ci === 1 ? 'bg-amber/[0.04]' : ''
                      }`}
                    >
                      {renderCell(cell, ci)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 md:hidden font-mono text-[10px] uppercase tracking-ruler text-ink/40">
          ← swipe →
        </p>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-ruler text-ink/40">
          {t('footnote')}
        </p>
      </div>
    </section>
  );
}
