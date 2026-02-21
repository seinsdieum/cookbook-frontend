import { Button, CompanyFormLayout, InputField } from '@ui'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { errorToMessage } from '@lib/parsers'
import { Link } from 'react-router-dom'
import { routes } from '@lib/routes'
import { cn } from '@lib/classnames'
import registerSchema, { RegisterSchema } from '../model/register.schema'
import { useRegister } from '../model/useRegister'
import { formLabels, registerLabels } from '@lib/information-messages'
import { t } from 'i18next'

type Props = {
  className?: string
}

const RegisterWidget = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) })
  const {
    handleLogin: handleRegister,
    isLoading,
    isError,
    error,
    isSuccess
  } = useRegister()
  const onSubmit: SubmitHandler<RegisterSchema> = handleRegister
  return (
    <CompanyFormLayout
      className={cn(className)}
      error={isError ? errorToMessage(error) : undefined}
      title={registerLabels.joinUs.message()}
      description={
        <p className='bold'>
          {registerLabels.hasAccount.message()}{' '}
          <Link to={routes.login.index}>{formLabels.signIn.message()}</Link>
        </p>
      }>
      <InputField
        name='email'
        label={formLabels.email.message()}
        register={register}
        type='email'
        error={
          errors.email?.message
            ? t(errors.email?.message.toString())
            : undefined
        }></InputField>
      <InputField
        name='password'
        label={formLabels.password.message()}
        register={register}
        type='password'
        error={
          errors.password?.message
            ? t(errors.password?.message.toString(), {
                count: 8,
                maxPasswordLength: 16
              })
            : undefined
        }></InputField>
      <InputField
        name='confirmPassword'
        label={formLabels.confirmPassword.message()}
        register={register}
        type='password'
        error={
          errors.confirmPassword?.message
            ? t(errors.confirmPassword.message.toString())
            : undefined
        }></InputField>
      <Button
        onClick={handleSubmit(onSubmit)}
        variant='primary'
        isLoading={isLoading}>
        {formLabels.signUp.message()}
      </Button>
    </CompanyFormLayout>
  )
}

export default RegisterWidget
