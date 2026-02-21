import { routes } from '@lib/routes'

const loginImages = {
  [routes.login.index]: '/stubs/images/login-page/signin.png',
  [routes.forgotPassword.index]: '/stubs/images/login-page/signin.png',
  [routes.resetPassword.index]: '/stubs/images/login-page/signin.png',
  [routes.register.index]: '/stubs/images/login-page/register.png'
} as const satisfies Record<string, string>

export function getImage(path: string): string {
  const imageMap: Record<string, string> = {
    [routes.login.index]: '/stubs/images/login-page/signin.png',
    [routes.forgotPassword.index]: '/stubs/images/login-page/signin.png',
    [routes.resetPassword.index]: '/stubs/images/login-page/signin.png',
    [routes.register.index]: '/stubs/images/login-page/register.png'
  }
  return imageMap[path] ?? '/stubs/images/login-page/register.png'
}
export default loginImages
