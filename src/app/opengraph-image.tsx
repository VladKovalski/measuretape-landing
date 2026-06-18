import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Ruler AR: AI Tape Measure App for iPhone';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(900px circle at 0% 0%, rgba(255,180,0,0.18), transparent 50%), radial-gradient(700px circle at 100% 100%, rgba(255,180,0,0.08), transparent 50%)',
          color: '#f5f5f7',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: '#ffb400',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 800,
              fontSize: 26
            }}
          >
            R
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 18,
              letterSpacing: 6,
              color: '#ffb400',
              textTransform: 'uppercase'
            }}
          >
            measuretape.app
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: '-0.06em',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <span>Tape Measure.</span>
            <span style={{ color: '#ffb400' }}>Reinvented.</span>
          </div>
          <div style={{ fontSize: 28, color: 'rgba(245,245,247,0.78)', maxWidth: 900 }}>
            AR + LiDAR measuring toolkit for iPhone. Length, height, area, 3D room plans, in seconds.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(245,245,247,0.6)',
            fontFamily: 'monospace',
            letterSpacing: 4,
            textTransform: 'uppercase'
          }}
        >
          <span>4.3★ · 3,486 reviews · 20 languages</span>
          <span style={{ color: '#ffb400' }}>Free on App Store</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
