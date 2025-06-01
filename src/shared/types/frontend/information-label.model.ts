interface InformationLabel<TArgs extends any[] = []> {
  key: string
  level: 'warning' | 'error' | 'info' | 'success'
  message: (...args: TArgs) => string
}
export type { InformationLabel }
