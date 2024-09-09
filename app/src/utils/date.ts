export const formatDate = (date: Date, includeDay: boolean = true): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    ...(includeDay && { day: 'numeric' }),
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}
