/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-800': '#002a5c',
        'blue-900': '#011e42',
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"] 
      },
      screens: {
        'sm': '550px',
        'md': '700px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}
