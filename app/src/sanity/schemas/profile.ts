import { q, type InferType, sanityImage } from 'groqd'
import { body } from './parts/body'

export type Profile = InferType<typeof profileQuery>

export const profileQuery = q('*')
  .filterByType('profile')
  .grab$({
    name: q.string(),
    body,
    media: q('media')
      .grab$({
        avatar: sanityImage('avatar').nullable(),
        blogBanner: sanityImage('blogBanner').nullable(),
        projectsBanner: sanityImage('projectsBanner').nullable(),
      })
      .nullable(),
    contacts: q
      .object({
        twitter: q.string().optional(),
        facebook: q.string().optional(),
        instagram: q.string().optional(),
        linkedin: q.string().optional(),
        figma: q.string().optional(),
        github: q.string().optional(),
        telegram: q.string().optional(),
        email: q.string().optional(),
      })
      .optional(),
  })
  .slice(0)
