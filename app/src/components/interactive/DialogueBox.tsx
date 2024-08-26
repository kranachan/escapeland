import { type FC, type HTMLAttributes } from 'react'
import { cn } from '~/utils/style-related'

export interface DialogueBoxProps extends HTMLAttributes<HTMLDivElement> {}

export const DialogueBox: FC<DialogueBoxProps> = (props) => {
  const { children, className } = props
  return (
    <div
      className={cn(
        `w-fit h-fit p-1 bg-container text-on-container [text-shadow:none]
        [border-image-source:url(/stipple-border.svg)] [border-image-slice:24_24]
        [border-image-repeat:round] border-[1.5rem] border-primary`,
        className,
      )}
    >
      {children}
    </div>
  )
}
