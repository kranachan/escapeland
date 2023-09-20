import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './BottomActionArea.module.css'
import { useStore } from '@nanostores/react'
import { isMobileNavOpen } from '~/store'
import clsx from 'clsx'

export interface BottomActionAreaProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export const BottomActionArea: FC<BottomActionAreaProps> = (props) => {
  const { className, children, ...rest } = props
  const $isMobileNavOpen = useStore(isMobileNavOpen)
  return (
    <button
      className={clsx(styles['mobile-action-area'], className)}
      onClick={() => {
        isMobileNavOpen.set(!$isMobileNavOpen)
      }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BottomActionArea
