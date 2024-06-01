import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'Escapeland',

  projectId: process.env.SECRET_PROJECT_ID ?? '',
  dataset: process.env.SECRET_DATASET ?? '',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
