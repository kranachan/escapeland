import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const imageBuilder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder.image(source)
}
