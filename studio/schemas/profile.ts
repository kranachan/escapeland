import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        {
          name: 'avatar',
          title: 'Avatar Image',
          description:
            'Image ratio: 320px x 524px (or maintain this aspect ratio).',
          type: 'image',
        },
        {
          name: 'blogBanner',
          title: 'Blog Banner Image',
          description:
            'Image ratio: 600px x 200px (or maintain this aspect ratio).',
          type: 'image',
        },
        {
          name: 'projectsBanner',
          title: 'Projects Banner Image',
          description:
            'Image ratio: 600px x 200px (or maintain this aspect ratio).',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter', type: 'string' },
        { name: 'instagram', title: 'Instagram', type: 'string' },
        { name: 'facebook', title: 'Facebook', type: 'string' },
        { name: 'linkedin', title: 'Linkedin', type: 'string' },
        { name: 'figma', title: 'Figma', type: 'string' },
        { name: 'github', title: 'Github', type: 'string' },
        { name: 'telegram', title: 'Telegram', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
      ],
    }),
  ],
})
