import { defineField, defineType } from "sanity"

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
        name: 'imageSection',
        title: 'Image Section',
        type: 'imageWithPosition', 
      }),
    ],
  })  