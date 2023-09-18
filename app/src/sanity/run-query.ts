import { useSanityClient } from '@sanity/astro'
import { makeSafeQueryRunner } from 'groqd'

export const runQuery = makeSafeQueryRunner((query: string) =>
  useSanityClient().fetch(query),
)
