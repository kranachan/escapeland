import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'
import vercel from '@astrojs/vercel/static'

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
    tailwind(),
    sanity({
      projectId: process.env.SECRET_PROJECT_ID,
      dataset: process.env.SECRET_DATASET,
    }),
  ],
})
