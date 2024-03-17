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
        // scndBgColor: 'var()'
        textColor: 'var(--textColor)',
        // scndTextColor: 'var()'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
