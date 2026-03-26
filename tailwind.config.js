/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },

      colors: {
        brand: {
          primary:   '#0B3C5D',   // Deep navy — authority, trust
          secondary: '#00A8A8',   // Teal — innovation, health
          accent:    '#6C63FF',   // Indigo — AI, tech
          blue:      '#0050A4',   // Royal blue — logo color
          light:     '#E8F4FD',   // Very light blue tint
        },
      },
      boxShadow: {
        'glow-teal':   '0 0 0 1px rgba(0,168,168,.2), 0 0 30px rgba(0,168,168,.15)',
        'glow-blue':   '0 0 0 1px rgba(0,80,164,.2),  0 0 30px rgba(0,80,164,.12)',
        'glow-accent': '0 0 0 1px rgba(108,99,255,.2), 0 0 30px rgba(108,99,255,.12)',
        'card':        '0 1px 3px rgba(11,60,93,.06), 0 4px 24px rgba(11,60,93,.04)',
        'card-hover':  '0 4px 12px rgba(11,60,93,.10), 0 12px 40px rgba(11,60,93,.08)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '.5' },
        },
        'scan-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        shimmer:      'shimmer 2.4s ease-in-out infinite',
        'spin-slow':  'spin-slow 20s linear infinite',
        'scan-line':  'scan-line 6s linear infinite',
        'fade-in-up': 'fade-in-up .6s ease forwards',
      },
    },
  },
  plugins: [],
}
