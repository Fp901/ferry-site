import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  // Production domain — drives canonical URLs and the generated sitemap.
  site: 'https://theferry.cafe',
  // Serve/canonicalise every route with a trailing slash so canonical tags,
  // the sitemap and the actual served URLs all agree (fixes GSC duplicate/
  // alternate-canonical issues).
  trailingSlash: 'always',
});
