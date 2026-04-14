/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:      '#0EA5E9', // sky blue
        accent:       '#EF4444', // coral red — CTAs, highlights
        'brand-navy': '#1a3848', // dark navy from logo — use for headers, rich sections
      },
    },
  },
  plugins: [],
};
