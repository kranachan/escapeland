import { q, type InferType, sanityImage } from 'groqd'

export type Graphic = InferType<typeof graphicsQuery>[number]

export const graphicsQuery = q('*')
  .filterByType('graphic')
  .grab$({
    image: sanityImage('image'),
    credit: q.string().optional(),
    link: q.string().optional(),
  })
