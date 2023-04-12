/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:['Roboto','sans-serif']
    },
    extend: {
      colors:{
        'yellow-ml':'#FFF159',
        'gray-menu':'rgba(51, 51, 51, 0.6)',
        'blue-dropdown': '#3483fa',
        'gray-text-info-footer': '#4B4B4B',
        'blue-text-link-info-footer': '#3483FA',
        'gray-light-text-info-footer': '#999'
      }
    },
  },
  plugins: [],
}