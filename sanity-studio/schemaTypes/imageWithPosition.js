import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageWithPosition',
    title: 'Image with Position',
    type: 'object',
    fields: [
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
