import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { useStore } from '@nanostores/react'
import { $isMobileNavOpen } from '~/store'
import clsx from 'clsx'

export interface BottomActionAreaProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export const BottomActionArea: FC<BottomActionAreaProps> = (props) => {
  const { className, children, ...rest } = props
  const isMobileNavOpen = useStore($isMobileNavOpen)
  return (
    <button
      className={clsx(
        'sm:!hidden fixed left-0 bottom-0 w-full h-16 flex justify-center items-center bg-accent-gradient-to-t',
        className,
      )}
      onClick={() => {
        $isMobileNavOpen.set(!isMobileNavOpen)
      }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BottomActionArea
