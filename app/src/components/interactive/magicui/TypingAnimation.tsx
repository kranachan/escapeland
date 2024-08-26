import { cn } from '~/utils/style-related'
import { useEffect, useState, type FC } from 'react'

export interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  duration = 100,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [i, setI] = useState<number>(0)

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i))
        setI(i + 1)
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [duration, i])

  return (
    <p className={cn('text-center text-xs', className)}>
      {displayedText ? displayedText : text}
    </p>
  )
}
