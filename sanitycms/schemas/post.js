// post.js
export default {
  title: 'Blog Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    }
  ]
}