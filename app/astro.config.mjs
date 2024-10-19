import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import react from '@astrojs/react'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: process.env.SECRET_DEPLOY_URL,
  integrations: [
    react(),
    icon(),
    sitemap(),
    robotsTxt(),
    tailwind(),
    sanity({
      projectId: process.env.SECRET_PROJECT_ID,
      dataset: process.env.SECRET_DATASET,
    }),
  ],
})
