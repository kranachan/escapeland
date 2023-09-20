import { q, sanityImage } from 'groqd'
import { categoryQuery } from './category'

export const postQuery = q('*')
  .filter('_type == "post"')
  .grab$({
    slug: q.slug('slug'),
    title: q.string(),
    publishedAt: q.date(),
    mainImage: sanityImage('mainImage'),
    categories: categoryQuery,
    body: q('body')
      .filter()
      .select({
        '_type == "block"': ['{...}', q.contentBlock()],
        '_type == "image"': ['{...}', sanityImage('').schema],
        default: {
          _key: q.string(),
          _type: ['"unsupported"', q.literal('unsupported')],
          unsupportedType: ['_type', q.string()],
        },
      }),
  })
