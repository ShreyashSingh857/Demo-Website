/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f6',
          100: '#d7deea',
          400: '#334768',
          700: '#101c33',
          800: '#0c1526',
          900: '#080f1c',
        },
        gold: {
          300: '#ecca80',
          400: '#e0b25a',
          500: '#c99a3f',
          600: '#a87b2c',
        },
        paper: {
          50: '#fbf9f4',
          100: '#f4efe3',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm2: '0 2px 18px -6px rgba(8,15,28,0.12)',
        card: '0 18px 40px -20px rgba(8,15,28,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        underline: {
          '0%': { strokeDashoffset: 240 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(.2,.7,.2,1) both',
        underline: 'underline 1.1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
