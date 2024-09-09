export const formatDateToMonthYearString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
