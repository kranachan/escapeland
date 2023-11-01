/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_PROJECT_ID: string
  readonly SECRET_DATASET: string
  readonly SECRET_DEPLOY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
