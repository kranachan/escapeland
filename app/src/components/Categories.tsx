import type { FC, HTMLAttributes } from 'react'
import Category from './Category'
import clsx from 'clsx'
import type { Category as ICategory } from '~/sanity/schemas/category'

export interface CategoriesProps extends HTMLAttributes<HTMLElement> {
  categories: ICategory[] | null
}

export const Categories: FC<CategoriesProps> = (props) => {
  const { className, categories, ...rest } = props
  return (
    categories && (
      <aside className={clsx('flex gap-2', className)} {...rest}>
        {categories.map((category) => {
          return <Category category={category} key={category.title} />
        })}
      </aside>
    )
  )
}

export default Categories
