import { q, sanityImage, type InferType } from 'groqd'

export type Artwork = InferType<typeof atrworksQuery>[number]

export const atrworksQuery = q('*')
  .filterByType('artwork')
  .grab$({
    title: q.string(),
    publishedAt: q.date(),
    illustration: sanityImage('illustration'),
  })
