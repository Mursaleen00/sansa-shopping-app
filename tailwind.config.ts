import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#8AC732', light: '#F1FDDF' },
        secondary: {
          DEFAULT: '#B3B7B1',
          '100': '#DADFD8',
          '300': '#8D918C',
          '400': '#6A6C68',
          '500': '#484A47',
          '600': '#292A28',
          '700': '#101110',
        },
        gray: '#F3F3F3',
        border: '#C5C8B9',
        error: '#BA1A1A',
      },
    },
  },
  plugins: [],
} satisfies Config;
