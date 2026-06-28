/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8f0fe',
          100: '#c5d8fc',
          200: '#9bbff9',
          300: '#6aa3f5',
          400: '#4589f2',
          500: '#1a6ef0',
          600: '#1560d8',
          700: '#0e4ab8',
          800: '#083799',
          900: '#022479',
        },
        accent: {
          400: '#f97316',
          500: '#ea580c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
