import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textImageSection',
  title: 'Text Image Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
      },
    }),
  ],
})
