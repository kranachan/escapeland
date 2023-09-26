import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC } from 'react'

export interface StampItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  stamp: {
    title: string
    imageUrl: string
  }
}

export const StampItem: FC<StampItemProps> = (props) => {
  const { stamp, className, ...rest } = props
  return (
    <button
      className={clsx(
        'flex gap-8 w-24 h-24 relative items-end justify-center bg-[url(/sd-card.svg)] flex-shrink-0',
        className,
      )}
      {...rest}
    >
      <div className="absolute w-20 h-20 left-2 top-2 rounded-md overflow-hidden">
        <div
          className="absolute w-full h-full border border-dashed border-[#dfdfdf]/30"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 76.25%, rgba(0, 0, 0, 0.90) 100%)',
          }}
        />
        <img
          className="w-full h-full object-cover"
          src={stamp.imageUrl}
          alt={stamp.title}
        />
      </div>
      <p className="relative px-2 my-2 text-sm">{stamp.title}</p>
    </button>
  )
}

export default StampItem
