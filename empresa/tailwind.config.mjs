/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'Londona': ['Londona', ...defaultTheme.fontFamily.sans],
        'Cocogoose': ['Cocogoose', ...defaultTheme.fontFamily.sans],
        'Coolvetica': ['Coolvetica', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
