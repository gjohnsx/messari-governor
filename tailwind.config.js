/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'messari': {  DEFAULT: '#15181C', 300: '#292F38',  400: '#1f242b',  500: '#15181C',  600: '#080a0c'},
        'messari-blue': {
          'light': '#0091EA',
          'dark': '#0078EA'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
