import { q, sanityImage, type InferType } from 'groqd'

export type Product = InferType<typeof productsQuery>[number]

export const productsQuery = q('*')
  .filterByType('engineering')
  .grab$({
    title: q.string(),
    startedAt: q.date(),
    completedAt: q.date(),
    mainImage: sanityImage('mainImage'),
    description: q.string(),
    website: q.string(),
    github: q.string(),
  })
