import { ExtractQuery, QuerySchema, RouteModel } from '../../types/frontend'

export const routes = {
  login: { index: '/login', title: 'Sign In' },
  forgotPassword: { index: '/forgot-password', title: 'Forgot Password' },
  resetPassword: {
    index: '/reset-password',
    title: 'Reset Password',
    query: {
      session_token: true
    }
  },
  register: { index: '/register', title: 'Sign Up' },
  home: { index: '/', title: 'Home' }
} as const satisfies Record<string, RouteModel<any>>

type Routes = typeof routes
type RouteKey = keyof Routes

type RouteQueryParams = {
  [K in RouteKey]: ExtractQuery<
    Routes[K] extends { query: infer Q } ? Q : undefined
  >
}
export function buildUrl<K extends RouteKey>(
  key: K,
  query: RouteQueryParams[K]
): string {
  const base = routes[key].index
  if (!query) return base
  const queryStr = new URLSearchParams(
    query as Record<string, string>
  ).toString()
  return `${base}?${queryStr}`
}
