/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Poppins', 'sans-serif'], 
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        bgBody: '#EBF1F5', cardWhite: '#FFFFFF', textPrimary: '#1A1A1A', textSecondary: '#64748B',
        darkBgBody: '#0F172A', darkCard: '#1E293B', darkTextPrimary: '#F8FAFC', darkTextSecondary: '#94A3B8',
        accentPrimary: '#714B67', clockText: '#4A3B45',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'float': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'glow': '0 0 15px rgba(113, 75, 103, 0.4)',
        'inner-sm': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'aurora': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      zIndex: { 'island': '9999', 'popover': '150', 'dropdown': '130', 'header': '100', 'subheader': '90', 'sidebar': '80', 'overlay': '70' },
      transitionTimingFunction: { 'spring': 'cubic-bezier(0.25, 0.8, 0.25, 1)', 'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)' }
    },
  },
  plugins: [],
}