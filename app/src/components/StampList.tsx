import clsx from 'clsx'
import { type FC, type HTMLAttributes } from 'react'
import StampItem from './StampItem'

export interface StampListProps extends HTMLAttributes<HTMLDivElement> {
  stamps: {
    title: string
    imageUrl: string
  }[]
}

export const StampList: FC<StampListProps> = (props) => {
  const { stamps, className, ...rest } = props

  return (
    <div
      className={clsx(
        'flex gap-4 overflow-x-scroll hidden-scrollbar flex-nowrap',
        className,
      )}
      {...rest}
    >
      {stamps?.map((stamp) => {
        return <StampItem key={stamp.title} stamp={stamp} />
      })}
    </div>
  )
}

export default StampList
