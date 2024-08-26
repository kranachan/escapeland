import type { FC } from 'react'
import { cn } from '~/utils/style-related'
import {
  TypingAnimation,
  type TypingAnimationProps,
} from './magicui/TypingAnimation'

export interface AsciiAvatarProps
  extends Omit<TypingAnimationProps, 'text' | 'duration'> {}

export const AsciiAvatar: FC<AsciiAvatarProps> = (props) => {
  const { className, ...rest } = props

  const ascii = `
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢳⡼⠀⠀⠘⠛⠛⢿⣿⣿⠛⢻⣤⠘⢻⣿⣿⠟⢻⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣤⣼⠛⠛⢻⣦⠀⣽⠛⢻⣼⣿⠘⢻⢤⣤⠜⢻⣤⠀⠀⠘⢻⣿⣿⠻⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣯⣽⠿⠟⠉⠉⠁⠀⢠⢤⢽⣿⠈⠉⢻⠭⠽⢿⣤⣤⠙⢻⣿⣤⣤⣤⣤⣼⠿⢿⣤⠉⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠏⠉⠁⠀⢠⢠⣤⣼⣭⣭⣼⣮⣽⠿⠿⢿⣤⣼⣿⠿⠽⠿⠿⠉⠹⠭⠭⠏⢙⣿⣿⡯⣤⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠯⠉⠁⠀⠀⠀⠀⢠⠬⠭⡍⠹⠭⠍⠉⠉⠉⠉⠉⠉⢹⢯⠹⠿⢿⣤⣤⣤⠀⠀⢠⣼⠿⠋⠹⣿⢿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠏⠉⠁⠀⠀⠀⡀⠀⠀⢨⠥⡸⠏⠉⠉⠁⠀⠀⠀⠀⠀⢰⠭⢭⣩⠭⠼⢶⠀⠈⠉⠉⠹⠿⡿⢿⣭⢤⠀⠀⠿⣯⠿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠏⠉⠁⣀⠀⠀⡼⠭⠏⠁⠀⠸⠏⠉⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⢉⣰⠿⠉⠀⠀⠸⢼⣷⠀⠀⣀⠀⠉⡂⠉⣿⠀⠀⠀⢿⣬
    ⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠏⢁⢀⣐⠒⣃⡴⠏⠁⠀⠀⠀⠈⠁⠀⠀⠀⠄⠀⠀⠀⠀⠀⢀⠐⢰⢺⠉⠀⠀⠀⠀⠀⠸⠿⠀⠀⢾⣄⠀⠙⡆⢿⣲⠀⠀⠀⡛
    ⣿⣿⡿⠏⣷⣿⣿⣿⣿⣿⣿⣿⣿⣷⣏⣉⣁⡶⠖⠒⣃⡴⠏⠁⠀⠀⠀⠀⠀⠀⢀⣀⠄⠁⢀⣰⠄⠁⢀⣰⠖⢁⣸⠾⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠸⠿⠀⠀⡏⠀⣿⠀⠀⠀⠀
    ⣿⣿⣇⡀⠿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⡏⠁⠀⢀⡐⡀⠖⠁⢀⠐⡎⠁⢀⣰⠞⠉⢀⣰⣾⠉⠀⠈⠉⠀⠀⠀⠀⠀⠀⢀⣸⢸⠀⠀⠀⠀⠀⠀⠉⡦⢹⢲⠀⠀⠈
    ⣿⣿⣿⣷⣂⣛⣛⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⢀⡖⠃⡀⠇⠀⢀⣰⡖⠓⠰⡞⢋⣀⣰⣾⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢹⠸⠀⠀⠀⠀⠀⠀⣀⠉⢸⢸⠀⠀⠀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣃⣰⣇⣀⣶⡧⠀⢰⠊⣇⣀⣰⡆⢓⣺⡞⢻⣞⠋⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠚⠀⠀⢲⠀⠀⠀⠀⠀⢁⠀⣿⣸⠀⠀⠀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣃⣶⣿⣇⣠⣿⡇⢀⡰⠊⠀⢰⡞⠃⢰⣾⣓⣆⡞⠋⠀⢘⡀⠀⠀⠀⠰⠀⢰⠀⠀⣸⣀⠠⠀⢸⠀⠀⠀⣀⠀⡀⠲⣿⠀⠀⠀⠀
    ⣿⣿⣿⣿⡟⠛⠛⡛⣿⣿⣟⣿⣿⣿⣷⣶⣿⣿⣿⡇⡏⣿⡇⠀⠎⠀⠀⢰⡞⢃⣰⡾⢃⣘⣛⢳⡦⠀⢸⠁⠀⠀⠀⠀⢠⣨⠀⢸⣸⣿⣠⠀⠀⠀⠀⠀⠀⠀⡇⣶⠛⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠚⠀⠀⠛⠛⣛⣿⣿⣿⡇⣷⣿⡇⠰⠃⣀⣰⣾⡇⣸⣇⣠⣇⡀⠘⢻⡇⠀⠀⠀⠀⠀⠀⢠⢶⣶⣒⣾⣛⢺⣿⢠⡀⠀⠀⠀⠀⠀⠁⣿⠀⠀⠀⠀⠀
    ⡀⠀⠀⠀⠒⠒⠒⠀⠀⠀⠓⠒⣅⠀⠀⠀⣇⣤⣟⡟⠓⣿⡇⠀⣤⣿⣯⣼⣷⣿⣿⣷⣜⢳⡦⢼⣧⡀⢠⣀⠀⠀⠀⢸⢸⢠⣼⣛⠘⢻⣿⠛⢛⠀⣀⠀⠀⠔⢃⣸⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡟⠛⠃⠀⠀⠀⢸⡇⣠⡟⢧⠘⣻⣇⣸⡟⢻⣿⣷⡆⠀⠘⢳⣄⢸⡁⠀⢸⢹⣼⣛⣚⣤⣤⢘⢻⣤⠘⢤⢨⠐⠴⢂⣼⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡟⠛⠛⠛⠃⠐⠂⠀⠀⠀⠀⠀⠛⢿⡇⠀⠀⠀⠙⢿⡇⢻⣤⣼⡇⠀⠀⠀⢸⣽⣼⣵⠼⢻⣤⢤⣤⣤⣤⣼⣦⠘⢻⣴⠼⠀⠘⣻⠀⠀⠀⠀⢤⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⣯⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠷⠀⠹⢿⣿⡇⢸⠏⢹⣷⠀⠀⠀⠀⠀⠀⠘⠿⢿⣼⢿⣿⣿⣿⣿⣿⣿⣤⠸⣿⣼⠿⠀⠀⠀⠀⣤⠖⠀⠠
    ⠀⠀⠀⠀⠀⠀⠀⠀⠿⣦⡄⠀⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⡽⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢿⣭⣽⣿⣿⢸⢿⣿⣼⢿⠿⠀⠀⠀⣤⠿⠉⠀⠄⠠
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⡏⠹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⡇⠀⢠⣼⠗⠀⠀⠀⠀⠀⠀⠀⢸⣿⢬⠹⠿⢹⣿⢠⣼⠿⠉⠨⠤⢤⠯⠽⠉⠠⡤⠏⣤⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢧⡄⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠹⠿⠿⢿⠿⠍⢫⣽⡿⠿⠭⠭⣭⠀⠯⢽⣤⣿⡿⠏⠹
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⠇⠀⠀⠀⠀⠀⠀⠀⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠠⠼⢧⣄⠀⢠⣄⠀⠀⠀⠀⠀⠀⠸⢷⣤⣤⣬⣭⣽⠿⢉⠤⠀⡀⠤⠽⠿⡿⢛⣿⢹⠤⠀⣿
    ⠀⠀⠀⠀⠀⠀⣀⣆⣴⡏⠉⠀⠀⠀⠀⠀⠀⠀⣾⡿⣿⣷⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⣬⣽⢧⣌⢹⠿⣷⠀⠀⠀⢀⣰⢾⣽⠭⠽⠉⠉⢉⣩⣠⠾⠉⠁⣤⣟⣥⡿⣿⢸⠀⠀⣿
    ⠀⠀⢀⣀⣷⠶⣟⣾⣏⡿⠶⣆⡀⠀⠀⠀⠀⠀⠿⠿⠿⠿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠨⠹⢿⡟⢹⢿⣉⣉⣀⣀⣰⣾⢹⣾⢉⣀⣰⠦⠶⠈⠹⢿⣿⣶⣾⣿⣿⣩⠀⣿⠸⣀⠀⠿
    ⠀⠐⣾⣿⡼⣄⡉⠉⠉⠁⠀⠿⣇⣶⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣶⣿⠧⢸⠈⢹⣿⣟⠉⢿⣿⣾⠽⠾⠉⠉⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣿⣶⣿⣀⠸⣀⠀
    ⠀⣀⣿⣿⣷⠏⠁⣀⣀⣀⣶⣶⠏⠁⠉⢷⣆⡖⠒⠒⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣉⣉⡉⠉⠀⢸⢀⣸⣿⣹⡾⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠰⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣶⣌⠒
    ⡀⠁⢸⣿⣷⠆⣀⣷⠏⠙⠁⠀⠀⠀⠀⠀⠙⢷⣆⣀⡓⡆⠀⠀⠀⠀⠀⠀⢴⣶⡿⠛⠋⢀⣰⢚⣿⡿⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀
    ⠀⠀⢸⣿⣷⣀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⢷⣷⣆⣶⣶⣶⣆⣀⣀⣀⣀⣀⣰⣚⣼⡾⠛⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⠀⠀⠈⠛⣲⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠛⠃⠀⠀⠘⠛⢳⣶⡾⠛⠛⠛⠛⢀⠀⠀⠘⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⠀⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢛⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⠀⠀⠀⠘⣿⣂⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣶⣸⣿⣛⣻⣶⣿⣿⣿⣿⣿⣿
    ⠀⠀⠀⣶⠟⠋⡛⣧⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  `

  return (
    <TypingAnimation
      text={ascii}
      duration={1}
      className={cn(
        `[font-size:0.375rem] sm:[font-size:1vmin] select-none
        [line-height:0.375rem] sm:[line-height:1vmin]`,
        className,
      )}
      {...rest}
    />
  )
}
