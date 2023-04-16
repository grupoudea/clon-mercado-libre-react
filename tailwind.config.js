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
        'blue-link': '#3483fa',
        'gray-text-info-footer': '#4B4B4B',
        'gray-9': '#999',
        'gray-3': '#333333',
        'gray-e': '#EEEEEE'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xs': '444px'
    },
  },
  plugins: [],
}