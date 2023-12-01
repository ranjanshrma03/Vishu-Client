/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef4d48',
        secondary: '#d90700',
        textPrimary: '#2b161b',
        textSecondary: '#453e3e',
      },
      fontFamily: {
        'lora': ['"Lora"', 'serif'],
        'WorkSans': ['"Work Sans"', 'serif'],
      }
    },
  },
  plugins: [],
}