/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['32px', '42px'],
      '4xl': ['48px', '58px'],
      '5xl': ['60px', '72px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#236CDE",
        "slate-gray": "#F7FAFF",
        "black": "#000000",
        "black-light": "#1a1a1a",
        "white": "#FFFFFF",
        "dark-blue": "#092640",
        "primary-light": "#397be1",
        "primary-dark": "#1c56b2",
        "gray-dark": "#999999",
        "gray-light": "#b3b3b3",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}