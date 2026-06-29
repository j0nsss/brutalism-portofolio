import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          black:  '#000000',
          white:  '#FFFBF0',
          yellow: '#FFE500',
          red:    '#FF3C3C',
          blue:   '#0057FF',
          green:  '#00FF85',
          pink:   '#FF6FD8',
          'yellow-dark': '#CCBA00',
          'red-dark':    '#CC2E2E',
          'blue-dark':   '#0040CC',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', ...fontFamily.sans],
        mono:    ['"JetBrains Mono"', ...fontFamily.mono],
        sans:    ['"Space Grotesk"', ...fontFamily.sans],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 7vw,  6rem)', { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 5vw,  4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      borderColor: {
        DEFAULT: '#000000',
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal':    '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        'brutal-yellow': '4px 4px 0px 0px #FFE500',
        'brutal-red':    '4px 4px 0px 0px #FF3C3C',
        'brutal-blue':   '4px 4px 0px 0px #0057FF',
        'brutal-white':  '4px 4px 0px 0px #FFFBF0',
        'none': 'none',
      },
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 100% 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-4px, 2px)' },
          '40%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(4px, -2px)' },
          '60%': { clipPath: 'inset(80% 0 5%  0)', transform: 'translate(-2px, 4px)' },
          '80%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(2px, -4px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      animation: {
        'marquee':       'marquee 20s linear infinite',
        'marquee-slow':  'marquee 35s linear infinite',
        'marquee-fast':  'marquee 10s linear infinite',
        'glitch':        'glitch 0.5s steps(2) infinite',
        'blink':         'blink 1s step-end infinite',
      },
      gridTemplateColumns: {
        'brutal': 'repeat(12, 1fr)',
        'brutal-auto': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
}
