import { sanityClient } from 'sanity:client'
import { makeSafeQueryRunner } from 'groqd'

export const runQuery = makeSafeQueryRunner((query: string) =>
  sanityClient.fetch(query),
)
