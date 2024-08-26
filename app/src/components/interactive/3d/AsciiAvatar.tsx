import { Text } from '@react-three/drei'
import { type MeshProps } from '@react-three/fiber'
import { useRef, type FC } from 'react'
import type { Mesh } from 'three'

export interface AsciiAvatarProps extends MeshProps {}

export const AsciiAvatar: FC<AsciiAvatarProps> = (props) => {
  const asciiTextRef = useRef<Mesh>(null!)

  return (
    <Text
      ref={asciiTextRef}
      color={'rgb(var(--colors-primary))'}
      fontSize={0.05}
      anchorX="center"
      anchorY="middle"
      lineHeight={1}
      {...props}
    >
      {`
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
            `}
    </Text>
  )
}
