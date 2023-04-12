/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:['Roboto','sans-serif']
    },
    extend: {
      colors:{
        'yellow-ml':'#FFF159',
        'gray-menu':'rgba(51, 51, 51, 0.6)',
        'blue-dropdown': '#3483fa'
      }
    },
  },
  plugins: [],
}