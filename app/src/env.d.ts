/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_PROJECT_ID: string
  readonly SECRET_DATASET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
