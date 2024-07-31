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
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
})
