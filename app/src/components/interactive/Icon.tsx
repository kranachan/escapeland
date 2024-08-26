import type { FC } from 'react'
import {
  addCollection,
  Icon as IconInternal,
  type IconProps as IconInternalProps,
} from '@iconify/react/dist/offline'
import { icons as memoryIcons } from '@iconify-json/memory'

export interface IconProps extends IconInternalProps {}

export const Icon: FC<IconProps> = (props) => {
  addCollection(memoryIcons)
  return <IconInternal {...props} />
}
