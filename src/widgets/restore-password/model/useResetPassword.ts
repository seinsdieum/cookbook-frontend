import { authApi } from '@/entities/auth'
import { RestorePasswordSchema } from './restore-password.schema'

export const useResetPassword = (session_token: string) => {
  const [resetPassword, { isLoading, isError, isSuccess }] =
    authApi.useResetPasswordMutation()
  const handleResetPassword = (data: RestorePasswordSchema) => {
    resetPassword({
      confirm_password: data.confirmPassword,
      password: data.password,
      session_token
    })
  }

  return {
    handleResetPassword,
    isLoading,
    isError,
    isSuccess
  }
}
