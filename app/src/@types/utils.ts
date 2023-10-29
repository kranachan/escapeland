export type PickDateTypes<T> = {
  [K in keyof T as T[K] extends Date ? K : never]: T[K]
}
