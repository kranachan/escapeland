import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'graphic',
  title: 'Graphic',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'credit',
      title: 'Credit',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link to',
      type: 'string',
    }),
  ],
})
