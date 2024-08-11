import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages',
  title: 'Pages',
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

      of: [
        {type: 'textBlock'},
        {type: 'backgroundTextSection'},
        {type: 'backgroundVideoSection'},
        {type: 'footerItem'},
        {type: 'timeline'},

        {type: 'imageSection'},

        {type: 'textImageSection'},

        {type: 'gap'},
        {type: 'horizontalLine'},
      ],
    }),
  ],
})
