import { authApi } from '@entities/auth'
import { RegisterSchema } from './register.schema'

export const useRegister = () => {
  const [register, { isLoading, isError, error, isSuccess }] =
    authApi.useRegisterMutation()
  const handleRegister = (data: RegisterSchema) => {
    return register(data)
  }

  return { handleLogin: handleRegister, isLoading, isError, error, isSuccess }
}
