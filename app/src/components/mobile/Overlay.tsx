import clsx from 'clsx'
import type { FC, HTMLAttributes, ReactNode } from 'react'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  className?: string
  children?: ReactNode
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { show, className, children, ...rest } = props
  return (
    show && (
      <div
        className={clsx(
          'sm:hidden fixed top-0 left-0 w-full min-h-screen h-[100dvh] bg-accent-overlay-gradient',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    )
  )
}
