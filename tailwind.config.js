/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D90429',
        secondary: '#020101',
        accent: '#F59E0B',
        background: '#F9FAFB',
        text: '#1F2937',
      },
      fontFamily: {
        alphacorsa: ['Alphacorsa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

