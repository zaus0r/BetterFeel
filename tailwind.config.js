/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        sage: {
          50: '#f8faf8',
          100: '#f0f4f1',
          200: '#dce5dd',
          300: '#b8ccba',
          400: '#97b39a',
          500: '#76957a',
          600: '#5f7961',
          700: '#4c614e',
          800: '#3d4d3e',
          900: '#2f3b30',
        },
        rose: {
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
