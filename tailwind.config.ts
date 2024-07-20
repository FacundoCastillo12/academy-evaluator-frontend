import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(224.6,85.4%,92%)',
          100: 'hsl(227.6,82.9%,83.9%)',
          200: 'hsl(230.9,83.5%,69%)',
          300: 'hsl(234,84.1%,53.1%)',
          400: 'hsl(237,83.5%,38%)',
          500: 'hsl(240,83.9%,22%)',
          600: 'hsl(237.2,84.3%,20%)',
          700: 'hsl(234.2,83.9%,17.1%)',
          800: 'hsl(230.6,84.2%,14.9%)',
          900: 'hsl(228.2,83.6%,12%)',
          950: 'hsl(226,82.5%,11.2%)',
        },
        secondary: {
          50: 'hsl(114.9,97.3%,57.1%)',
          100: 'hsl(110,97.5%,53.1%)',
          200: 'hsl(104.8,97.5%,46.9%)',
          300: 'hsl(100,97.1%,40%)',
          400: 'hsl(95,96.6%,34.1%)',
          500: 'hsl(89.8,97.1%,27.3%)',
          600: 'hsl(95.3,96.7%,24.1%)',
          700: 'hsl(100.2,98%,20%)',
          800: 'hsl(105,97.7%,16.9%)',
          900: 'hsl(109.7,97%,12.9%)',
          950: 'hsl(114.9,96.7%,12%)',
        },
        accent: {
          50: 'hsl(315,40%,98%)',
          100: 'hsl(312,38.5%,94.9%)',
          200: 'hsl(312.6,37.3%,90%)',
          300: 'hsl(314,39.5%,85.1%)',
          400: 'hsl(313.5,39.2%,80%)',
          500: 'hsl(313.5,39.2%,75.5%)',
          600: 'hsl(312.6,39.2%,62%)',
          700: 'hsl(312.9,39.2%,49%)',
          800: 'hsl(313.3,39.1%,36.1%)',
          900: 'hsl(313,39%,23.1%)',
          950: 'hsl(312.4,39.5%,16.9%)',
        },
        'base-400': '#1B1A47',
      },
      backgroundColor: {
        primary: {
          50: 'hsl(210,56.5%,91%)',
          100: 'hsl(210,56.5%,82%)',
          200: 'hsl(210.3,57.4%,64.1%)',
          300: 'hsl(209.8,57.3%,46.9%)',
          400: 'hsl(210,56.8%,29%)',
          500: 'hsl(210,57.1%,11%)',
          600: 'hsl(210,56.5%,9%)',
          700: 'hsl(210,55.6%,7.1%)',
          800: 'hsl(210,60%,3.9%)',
          900: 'hsl(210,60%,2%)',
          950: 'hsl(200,60%,1%)',
        },
        secondary: {
          50: 'hsl(114.9,97.3%,57.1%)',
          100: 'hsl(110,97.5%,53.1%)',
          200: 'hsl(104.8,97.5%,46.9%)',
          300: 'hsl(100,97.1%,40%)',
          400: 'hsl(95,96.6%,34.1%)',
          500: 'hsl(89.8,97.1%,27.3%)',
          600: 'hsl(95.3,96.7%,24.1%)',
          700: 'hsl(100.2,98%,20%)',
          800: 'hsl(105,97.7%,16.9%)',
          900: 'hsl(109.7,97%,12.9%)',
          950: 'hsl(114.9,96.7%,12%)',
        },
        accent: {
          50: 'hsl(315,40%,98%)',
          100: 'hsl(312,38.5%,94.9%)',
          200: 'hsl(312.6,37.3%,90%)',
          300: 'hsl(314,39.5%,85.1%)',
          400: 'hsl(313.5,39.2%,80%)',
          500: 'hsl(313.5,39.2%,75.5%)',
          600: 'hsl(312.6,39.2%,62%)',
          700: 'hsl(312.9,39.2%,49%)',
          800: 'hsl(313.3,39.1%,36.1%)',
          900: 'hsl(313,39%,23.1%)',
          950: 'hsl(312.4,39.5%,16.9%)',
        },
        'base-400': '#1B1A47',
      },
      textColor: {
        primary: {
          50: 'hsl(210,56.5%,91%)',
          100: 'hsl(210,56.5%,82%)',
          200: 'hsl(210.3,57.4%,64.1%)',
          300: 'hsl(209.8,57.3%,46.9%)',
          400: 'hsl(210,56.8%,29%)',
          500: 'hsl(210,57.1%,11%)',
          600: 'hsl(210,56.5%,9%)',
          700: 'hsl(210,55.6%,7.1%)',
          800: 'hsl(210,60%,3.9%)',
          900: 'hsl(210,60%,2%)',
          950: 'hsl(200,60%,1%)',
        },
        secondary: {
          50: 'hsl(114.9,97.3%,57.1%)',
          100: 'hsl(110,97.5%,53.1%)',
          200: 'hsl(104.8,97.5%,46.9%)',
          300: 'hsl(100,97.1%,40%)',
          400: 'hsl(95,96.6%,34.1%)',
          500: 'hsl(89.8,97.1%,27.3%)',
          600: 'hsl(95.3,96.7%,24.1%)',
          700: 'hsl(100.2,98%,20%)',
          800: 'hsl(105,97.7%,16.9%)',
          900: 'hsl(109.7,97%,12.9%)',
          950: 'hsl(114.9,96.7%,12%)',
        },
        accent: {
          50: 'hsl(315,40%,98%)',
          100: 'hsl(312,38.5%,94.9%)',
          200: 'hsl(312.6,37.3%,90%)',
          300: 'hsl(314,39.5%,85.1%)',
          400: 'hsl(313.5,39.2%,80%)',
          500: 'hsl(313.5,39.2%,75.5%)',
          600: 'hsl(312.6,39.2%,62%)',
          700: 'hsl(312.9,39.2%,49%)',
          800: 'hsl(313.3,39.1%,36.1%)',
          900: 'hsl(313,39%,23.1%)',
          950: 'hsl(312.4,39.5%,16.9%)',
        },
        'base-400': '#1B1A47',
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'hsl(237.2,84.3%,20%)',
          'primary-content': 'hsl(224.6,85.4%,96%)',
          secondary: 'hsl(89.8,97.1%,27.3%)',
          'secondary-content': 'hsl(114.9,97.3%,57.1%)',
          accent: 'hsl(313.5,39.2%,75.5%)',
          'accent-content': 'hsl(312.4,39.5%,16.9%)',
          'base-100': '#312E81',
          'base-200': '#29276D',
          'base-300': '#24225E',
          'base-400': '#1B1A47',
          neutral: 'hsl(233.8,47.1%,55%)',
          'base-content': 'hsl(240,48.6%,95.1%)',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};
export default config;
