import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SECRET_PROJECT_ID,
    dataset: process.env.SECRET_DATASET,
  },
})
