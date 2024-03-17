import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel/static'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import react from '@astrojs/react'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: process.env.SECRET_DEPLOY_URL,
  image: {
    service: squooshImageService(),
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
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
