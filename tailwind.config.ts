import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        ink: '#f5f5f7',
        muted: '#6b6b70',
        line: '#222226',
        amber: {
          DEFAULT: '#ffb400',
          soft: '#ffdb40'
        }
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.05em',
        ruler: '0.32em'
      }
    }
  },
  plugins: []
};

export default config;
