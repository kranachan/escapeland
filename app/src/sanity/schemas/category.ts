import { q, type InferType } from 'groqd'

export type Category = InferType<typeof categoriesQuery>[number]

export const categoriesQuery = q('*').filterByType('category').grab$({
  title: q.string(),
  description: q.string(),
})
