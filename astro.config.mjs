import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  // Production domain — drives canonical URLs and the generated sitemap.
  site: 'https://theferry.cafe',
});
