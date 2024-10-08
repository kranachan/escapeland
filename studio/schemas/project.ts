import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'startedAt',
      title: 'Started At',
      type: 'date',
      options: {
        dateFormat: 'MMM-YYYY',
      },
    }),
    defineField({
      name: 'completedAt',
      title: 'Completed At',
      type: 'date',
      options: {
        dateFormat: 'MMM-YYYY',
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'WIP', value: 'wip' },
          { title: 'Done', value: 'done' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'object',
      fields: [
        { name: 'website', title: 'Website', type: 'string' },
        { name: 'design', title: 'Design', type: 'string' },
        { name: 'sourceCode', title: 'Source Code', type: 'string' },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
