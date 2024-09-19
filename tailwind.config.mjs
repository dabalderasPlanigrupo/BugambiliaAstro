/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '500ms',
      },
      borderRadius: {
        footer: '2rem',
      },
      colors: {
        primary: '#93358c',
        secondary: '#f58916',
        accent: '#969696',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
