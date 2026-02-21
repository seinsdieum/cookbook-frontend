import { authApi } from '@entities/auth'
import { useMemo, useState } from 'react'
import { EmailSchema } from './email.schema'
import { ResetCodeSchema } from './reset-code.schema'
import { useNavigate } from 'react-router-dom'
import { buildUrl } from '@lib/routes'
import { errorToMessage } from '@lib/parsers'

export const useForgotPassword = () => {
  const [sessionToken, setSessionToken] = useState<null | string>(null)
  const [sessionEmail, setSessionEmail] = useState<null | string>(null)
  const [
    sendEmail,
    {
      isLoading: isSendEmailLoading,
      isError: isSendEmailError,
      error: sendEmailError,
      isSuccess: isSendEmailSuccess
    }
  ] = authApi.useRequestPasswordResetMutation()

  const navigate = useNavigate()
  const [
    sendCode,
    {
      isLoading: isSendCodeLoading,
      isError: isSendCodeError,
      error: sendCodeError,
      reset: handleResetCode
    }
  ] = authApi.useSendPasswordResetCodeMutation()

  const isEmailHandled = useMemo(
    () => isSendEmailSuccess && sessionEmail !== null,
    [isSendEmailSuccess, sessionEmail]
  )

  const errorMessage = useMemo(
    () =>
      isSendCodeError
        ? errorToMessage(sendCodeError)
        : isSendEmailError
        ? errorToMessage(sendEmailError)
        : undefined,
    [isSendCodeError, isSendEmailError]
  )

  const isLoading = useMemo(
    () => isSendCodeLoading || isSendEmailLoading,
    [isSendCodeLoading, isSendEmailLoading]
  )

  const handleSendEmail = (data: EmailSchema) => {
    console.log(data)
    setSessionEmail(data.email)
    sendEmail(data)
      .unwrap()
      .then(x => {
        console.log(x)
        setSessionToken(x.session_token)
      })
      .catch(() => setSessionEmail(null))
  }

  const handleSendCode = (data: ResetCodeSchema) => {
    console.log(data)
    if (!sessionToken || isSendCodeError) return

    sendCode({ reset_code: data.resetCode, session_token: sessionToken })
      .unwrap()
      .then(() => {
        navigate(buildUrl('resetPassword', { session_token: sessionToken }))
      })
  }

  return {
    handleSendEmail,
    handleSendCode,
    handleResetCode,
    sessionEmail,
    isLoading,
    errorMessage,
    isEmailHandled
  }
}
