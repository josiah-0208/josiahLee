import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'background-color': 'background-color',
      },
      colors: {
        bgColor: 'var(--backGround)',
        secondColor: 'var(--secondColor)',
        textColor: 'var(--textColor)',
        borderColor: 'var(--borderColor)',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
  darkMode: 'class',
};
export default config;
