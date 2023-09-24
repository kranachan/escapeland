import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC } from 'react'
import type { Category as ICategory } from '~/sanity/schemas/category'

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: ICategory
}

export const Category: FC<CategoryProps> = (props) => {
  const { className, category, ...rest } = props

  return (
    <button
      className={clsx(
        'block w-max text-xs px-2 py-0.5 bg-[#dfdfdf]/20 cursor-pointer',
        className,
      )}
      {...rest}
    >
      {category.title}
    </button>
  )
}

export default Category
