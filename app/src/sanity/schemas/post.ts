import { q, sanityImage, type InferType } from 'groqd'

export type Post = InferType<typeof postsQuery>[number]

export const postsQuery = q('*')
  .filterByType('post')
  .grab$({
    slug: q.slug('slug'),
    title: q.string(),
    publishedAt: q.date(),
    mainImage: sanityImage('mainImage'),
    categories: q('categories')
      .filter()
      .deref()
      .grab$({
        title: q.string(),
        description: q.string(),
      })
      .nullable(),
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
