import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      code: ['var(--font-d2coding)', 'var(--font-fira-code)'],
      body: ['var(--font-pretendard)', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
