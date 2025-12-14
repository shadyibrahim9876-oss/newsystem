/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // مهم عشان الدارك مود يشتغل
  theme: {
    extend: {
      colors: {
        // الألوان الخاصة بتصميمك
        accentPrimary: '#007AFF', // أزرق أبل المميز
        accentSecondary: '#5856D6',
        bgBody: '#F5F5F7',        // لون خلفية فاتح مريح للعين
        cardWhite: '#FFFFFF',
        textPrimary: '#1D1D1F',
        textSecondary: '#86868B',
        
        // ألوان الوضع الليلي (Dark Mode)
        darkBgBody: '#000000',
        darkCard: '#1C1C1E',
        darkTextPrimary: '#F5F5F7',
        darkTextSecondary: '#86868B',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 122, 255, 0.5)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}