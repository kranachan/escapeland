import type { PickDateTypes } from '~/@types/utils'

export const sortDescendingByDate =
  <T>(dateField: keyof PickDateTypes<T>) =>
  (a: T, b: T) => {
    if (a[dateField] instanceof Date && b[dateField] instanceof Date) {
      const dateA = a[dateField] as Date
      const dateB = b[dateField] as Date

      return dateB.getTime() - dateA.getTime()
    }
    // Handle cases where the date fields are missing or not of Date type
    return 0
  }
