/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgBody: '#EBF1F5',
        cardWhite: '#FFFFFF',
        textPrimary: '#1A1A1A',
        textSecondary: '#64748B',
        darkBgBody: '#0F172A',
        darkCard: '#1E293B',
        darkTextPrimary: '#F8FAFC',
        darkTextSecondary: '#94A3B8',
        accentPrimary: '#714B67',
        clockText: '#4A3B45',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'float': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'glow': '0 0 15px rgba(113, 75, 103, 0.4)',
      },
      zIndex: {
        'island': '9999',
        'header': '100',
        'subheader': '90',
        'sidebar': '80',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'shake': 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        }
      }
    },
  },
  plugins: [],
}