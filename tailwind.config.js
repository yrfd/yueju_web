/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        china: {
          red: '#C41E3A',
          'red-dark': '#9C1628',
          'red-light': '#E84A63',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3A3A3A',
        },
        rice: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE6D8',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'STSong', 'SimSun', 'serif'],
        sans: ['"Noto Sans SC"', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(26, 26, 26, 0.08)',
        'card-hover': '0 12px 28px rgba(26, 26, 26, 0.16)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out both',
      },
    },
  },
  plugins: [],
}
