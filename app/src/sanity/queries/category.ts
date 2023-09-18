import { q } from 'groqd'

export const categoryQuery = q('*').filter('_type == "category"').grab$({
  title: q.string(),
  description: q.string(),
})
