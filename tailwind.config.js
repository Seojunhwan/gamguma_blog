const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const { blueGray, coolGray, lightBlue, trueGray, warmGray, ...restColors } = colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-pretendard)', ...fontFamily.sans],
      aggro: ['var(--font-aggro)', ...fontFamily.sans],
    },
    colors: {
      ...restColors,
      primary: '#FFE3E1',
      secondary: '#FFD1D1',
      accent: '#FF9494',
      background: '#FFF5E4',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class',
};
