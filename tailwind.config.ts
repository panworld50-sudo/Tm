import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        skyBrand: '#0ea5e9',
        violetBrand: '#8b5cf6',
        night: {
          950: '#0a0a0f',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif']
      },
      backgroundImage: {
        'moon-gradient': 'radial-gradient(circle at top, rgba(14,165,233,0.25), transparent 45%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.3), transparent 35%)'
      }
    }
  },
  plugins: []
};

export default config;
