import { Button, CompanyFormLayout, InputField } from '@ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import restorePasswordSchema, {
  RestorePasswordSchema
} from '../model/restore-password.schema'
import { t } from 'i18next'
import { authLabels, formLabels } from '@lib/information-messages'
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom'
import { routes } from '@lib/routes'
import { useResetPassword } from '../model/useResetPassword'

const ResetPasswordWidget = () => {
  const [searchParams] = useSearchParams()
  const session_token = searchParams.get('session_token')
  if (!session_token) return <Navigate to={routes.forgotPassword.index} />

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(restorePasswordSchema) })
  const { handleResetPassword, isError, isLoading, isSuccess } =
    useResetPassword(session_token)

  const onSubmit: SubmitHandler<RestorePasswordSchema> = handleResetPassword
  console.log(errors)
  return (
    <CompanyFormLayout title={authLabels.restoreAccess.message()}>
      <InputField
        label={formLabels.password.message()}
        name='password'
        type='password'
        error={errors.password?.message && t(errors.password?.message)}
        register={register}
      />
      <InputField
        label={formLabels.confirmPassword.message()}
        name='confirmPassword'
        type='password'
        error={
          errors.confirmPassword?.message && t(errors.confirmPassword?.message)
        }
        register={register}
      />
      <Button
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
        variant='primary'>
        {formLabels.submit.message()}
      </Button>
    </CompanyFormLayout>
  )
}

export default ResetPasswordWidget
