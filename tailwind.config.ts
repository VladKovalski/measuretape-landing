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
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
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
