/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#f7c873',
        dark: '#111111',
        light: '#f8f8f8',
      }
    },
  },
  plugins: [],
}
