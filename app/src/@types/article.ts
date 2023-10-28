export type WithPublishedDate<T> = T & { publishedAt: Date }
export type WithRangeDates<T> = T & { startedAt: Date; completedAt: Date }

export type ArticleBase = {
  title: string
  description?: string
}

export type Article =
  | WithPublishedDate<ArticleBase>
  | WithRangeDates<ArticleBase>
