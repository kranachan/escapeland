import { type AnchorHTMLAttributes, type FC } from 'react'
import { Categories } from './Categories'
import type { Post } from '~/sanity/schemas/post'

export interface PostCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  preview: Omit<Post, 'mainImage' | 'body'>
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { preview, children, ...rest } = props
  return (
    <a className="flex flex-col gap-1" href={`post/${preview.slug}`} {...rest}>
      <div className="mb-3">{children}</div>
      <Categories categories={preview.categories} />
      <p>{preview.title}</p>
      <p className="text-xs">{preview.publishedAt.toDateString()}</p>
    </a>
  )
}
