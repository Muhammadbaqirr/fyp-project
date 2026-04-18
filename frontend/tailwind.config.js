/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -6px rgba(15, 23, 42, 0.12)',
        'card-dark': '0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px -12px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(20, 184, 166, 0.25), 0 20px 50px -20px rgba(13, 148, 136, 0.35)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(20, 184, 166, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(15, 118, 110, 0.08) 0px, transparent 45%), radial-gradient(at 100% 100%, rgba(148, 163, 184, 0.15) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 20% 20%, rgba(20, 184, 166, 0.15) 0px, transparent 45%), radial-gradient(at 80% 0%, rgba(15, 118, 110, 0.12) 0px, transparent 40%), radial-gradient(at 50% 100%, rgba(15, 23, 42, 1) 0px, transparent 55%)',
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
    },
  },
  plugins: [],
}
