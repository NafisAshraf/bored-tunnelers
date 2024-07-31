import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'other',
  title: 'Other',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'footerItem'}, {type: 'textBlock'}],
    }),
  ],
})
