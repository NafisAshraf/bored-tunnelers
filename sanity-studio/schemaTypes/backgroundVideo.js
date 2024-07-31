import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'backgroundVideo',
  title: 'Background Video',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
