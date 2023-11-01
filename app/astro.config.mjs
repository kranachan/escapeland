import { defineConfig, squooshImageService } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'

// https://astro.build/config
export default defineConfig({
  site: process.env.SECRET_DEPLOY_URL,
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: process.env.SECRET_PROJECT_ID,
      dataset: process.env.SECRET_DATASET,
    }),
  ],
})
