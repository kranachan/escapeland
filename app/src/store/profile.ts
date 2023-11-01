import { map } from 'nanostores'
import type { Profile } from '~/sanity/schemas/profile'

export const $profile = map<{ data: NonNullable<Profile>; isFetched: boolean }>(
  {
    data: { name: 'Minakami', body: [] },
    isFetched: false,
  },
)
