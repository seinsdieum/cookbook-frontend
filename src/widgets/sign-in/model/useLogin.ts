import { authApi } from '@entities/auth'
import { SignInSchema } from './sign-in.schema'

export const useLogin = () => {
  const [login, { isLoading, isError, error, isSuccess }] =
    authApi.useLoginMutation()
  const handleLogin = (data: SignInSchema) => {
    return login(data)
  }

  return { handleLogin, isLoading, isError, error, isSuccess }
}
