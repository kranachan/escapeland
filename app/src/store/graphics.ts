import { map } from 'nanostores'
import { runQuery } from '~/sanity/run-query'
import { graphicsQuery, type Graphic } from '~/sanity/schemas/graphic'

export const $graphics = map<{
  data: NonNullable<Graphic[]>
  isFetched: boolean
}>({
  data: [],
  isFetched: false,
})

export const fetchGraphics = async (): Promise<NonNullable<Graphic[]>> => {
  if (!$graphics.get().isFetched) {
    const response = await runQuery(graphicsQuery)

    if (response) {
      $graphics.setKey('isFetched', true)
      $graphics.setKey('data', response)
    }
  }

  return $graphics.get().data
}
