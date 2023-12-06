import { q, sanityImage, type InferType } from 'groqd'
import { body } from './parts/body'

export type Post = InferType<typeof postsQuery>[number]

export type PostDirectory = InferType<typeof postDirectoryQuery>

export const postsQuery = q('*')
  .filterByType('post')
  .grab$({
    slug: q.slug('slug'),
    title: q.string(),
    publishedAt: q.date(),
    mainImage: sanityImage('mainImage'),
    isPostListVisible: q.boolean(),
    categories: q('categories')
      .filter()
      .deref()
      .grab$({
        title: q.string(),
        description: q.string(),
      })
      .nullable(),
    body,
  })

export const postDirectoryQuery = q('*')
  .filterByType('post')
  .grab$({
    slug: q.slug('slug'),
    title: q.string(),
    publishedAt: q.date(),
  })
