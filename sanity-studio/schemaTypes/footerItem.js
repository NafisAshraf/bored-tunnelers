import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerItem',
  title: 'Footer Item',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'link',
      media: 'logo',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
      }
    },
  },
})
