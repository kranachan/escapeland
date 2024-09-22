import { likelyWithKeyboard, getHotKeyHint } from 'keyux'
import type { FC } from 'react'

export interface HotKeyHintProps {
  hotkey: string
}

export const HotKeyHint: FC<HotKeyHintProps> = ({ hotkey }) => {
  return (
    likelyWithKeyboard(window) && (
      <kbd className="border border-black text-xs text-center w-4 h-4 group-[.is-pressed]:bg-background group-[.is-pressed]:text-on-background">
        {getHotKeyHint(window, hotkey)}
      </kbd>
    )
  )
}
