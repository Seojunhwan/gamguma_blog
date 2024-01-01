import type { Config } from 'tailwindcss';

// Modify your tailwind.config.js
const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      code: ['var(--font-d2coding)', 'var(--font-fira-code)'],
      body: ['var(--font-pretendard)', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          100: '#111111',
          200: '#1a1a1a',
          300: '#222222',
          400: '#2b2b2b',
          500: '#313131',
          600: '#3b3b3b',
          700: '#494949',
          800: '#626262',
          900: '#6f6f6f',
          1000: '#7f7f7f',
          1100: '#b5b3ad',
          1200: '#eeeeee',
        },
      },
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
