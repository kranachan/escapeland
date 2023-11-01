import { map } from 'nanostores'
import type { Profile } from '~/sanity/schemas/profile'
import { runQuery } from '~/sanity/run-query'
import { profileQuery } from '~/sanity/schemas/profile'

export const $profile = map<{ data: NonNullable<Profile>; isFetched: boolean }>(
  {
    data: { name: 'Minakami', body: [] },
    isFetched: false,
  },
)

export const fetchProfile = async (): Promise<NonNullable<Profile>> => {
  if (!$profile.get().isFetched) {
    $profile.setKey('isFetched', true)
    const response = await runQuery(profileQuery)

    if (response) {
      $profile.setKey('data', response)
    }
  }

  return $profile.get().data
}
