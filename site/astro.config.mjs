// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brendonotto.com',
  output: 'static',
  build: {
    // One HTML file with its CSS inlined; the whole site is a single request plus fonts.
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: {
      // Code blocks follow the page theme; see the .astro-code rules in layouts/Post.astro.
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
