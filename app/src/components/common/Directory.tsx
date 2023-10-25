import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import { type HTMLAttributes, type FC } from 'react'
import { type PostDirectory } from '~/sanity/schemas/post'
import { $isMobileNavOpen } from '~/store'

export interface DirectoryProps extends HTMLAttributes<HTMLDivElement> {
  directory: PostDirectory
  currentSlug: string
}

export const Directory: FC<DirectoryProps> = (props) => {
  const { directory, currentSlug, className, ...rest } = props
  const isMobileNavOpen = useStore($isMobileNavOpen)

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 z-20 px-6 py-16 sm:flex flex-col justify-start items-end text-end h-full gap-4 overflow-y-auto thin-scrollbar',
        isMobileNavOpen ? 'flex flex-col-reverse' : 'hidden',
        className,
      )}
      {...rest}
    >
      {directory.map((directory) => {
        const isCurrentSlug = currentSlug === directory.slug
        return (
          <a
            className={clsx('text-sm', !isCurrentSlug && 'opacity-50')}
            key={directory.title}
            href={directory.slug}
          >
            <p>{directory.publishedAt.toDateString()}</p>
            <h3>
              {isCurrentSlug && <i>*</i>} {directory.title}
            </h3>
          </a>
        )
      })}
    </div>
  )
}

export default Directory
