import { q, sanityImage, type InferType } from 'groqd'

export type Project = InferType<typeof projectsQuery>[number]

export const projectsQuery = q('*')
  .filterByType('project')
  .grab$({
    title: q.string(),
    startedAt: q.date(),
    completedAt: q.date().optional(),
    mainImage: sanityImage('mainImage'),
    description: q.string(),
    status: q.union([q.literal('draft'), q.literal('wip'), q.literal('done')]),
    resources: q.object({
      website: q.string().optional(),
      design: q.string().optional(),
      sourceCode: q.string().optional(),
    }),
  })
