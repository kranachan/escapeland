import { defineField, defineType } from 'sanity'
import { CodeBlockIcon } from '@sanity/icons'

export default defineType({
  title: 'Code Block',
  name: 'codeBlock',
  type: 'object',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      title: 'File Path',
      name: 'filePath',
      type: 'string',
    }),
    defineField({
      title: 'Code Object',
      name: 'codeObject',
      type: 'code',
    }),
  ],
})
