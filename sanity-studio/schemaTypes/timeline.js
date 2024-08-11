import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'timelineItem'}],
    }),
  ],
})
