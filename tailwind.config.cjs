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
      },
      keyframes: {
        'slideDown': {
          '0%': {
            transform: 'translateY(-400px)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'slideDown': 'slideDown 0.2s ease-in-out'
      },
    },
  },
  plugins: [],
}
