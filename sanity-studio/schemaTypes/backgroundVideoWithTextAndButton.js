import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'backgroundVideoWithTextAndButton',
  title: 'Background Video With Text And Button',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file', // Allows video uploads
      options: {
        accept: 'video/*', // Limit file selection to video files
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'string', // Changed to 'string' for a simple text field
    }),
  ],
})
