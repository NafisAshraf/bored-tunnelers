import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageSection',
  title: 'Image Section',
  type: 'object',
  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
