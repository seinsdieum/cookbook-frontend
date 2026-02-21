type QuerySchema = Record<string, boolean>

type ExtractQuery<Q> = Q extends QuerySchema
  ? {
      [K in keyof Q as Q[K] extends true ? K : never]: string
    } & {
      [K in keyof Q as Q[K] extends false ? K : never]?: string
    }
  : undefined

type RouteModel<Q extends QuerySchema | undefined = undefined> = {
  index: string
  title: string
  query?: Q
}

export type { QuerySchema, ExtractQuery, RouteModel }
