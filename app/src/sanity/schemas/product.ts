import { q, sanityImage, type InferType } from 'groqd'

export type Product = InferType<typeof productsQuery>[number]

export const productsQuery = q('*')
  .filterByType('product')
  .grab$({
    title: q.string(),
    startedAt: q.date(),
    completedAt: q.date().optional(),
    mainImage: sanityImage('mainImage'),
    description: q.string(),
    website: q.string(),
    github: q.string().optional(),
  })
