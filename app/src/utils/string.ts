export const camelToSentenceCase = (camelCaseString: string): string => {
  const result = camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase())

  return result
}
