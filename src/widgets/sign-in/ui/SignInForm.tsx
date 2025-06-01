import { Button, CompanyFormLayout, InputField } from '@ui'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signInSchema, { SignInSchema } from '../model/sign-in.schema'
import { useLogin } from '../model/useLogin'
import { errorToMessage } from '@lib/parsers'
import { Link } from 'react-router-dom'
import { routes } from '@lib/routes'
import { cn } from '@lib/classnames'
import { authLabels, formLabels, loginLabels } from '@lib/information-messages'

type Props = {
  className?: string
}

const SignInWidget = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) })
  const { handleLogin, isLoading, isError, error, isSuccess } = useLogin()
  const onSubmit: SubmitHandler<SignInSchema> = handleLogin
  return (
    <CompanyFormLayout
      className={cn(className)}
      error={isError ? errorToMessage(error) : undefined}
      title={loginLabels.welcomeBack.message()}
      description={
        <p className='bold'>
          {loginLabels.newHere.message()}{' '}
          <Link to={routes.register.index}>
            {loginLabels.createAccount.message()}
          </Link>
        </p>
      }>
      <InputField
        name='email'
        label={formLabels.email.message()}
        register={register}
        type='email'
        error={
          errors.email?.message ? errors.email?.message.toString() : undefined
        }></InputField>
      <InputField
        name='password'
        label={formLabels.password.message()}
        link={{
          to: routes.forgotPassword.index,
          title: authLabels.forgotPassword.message()
        }}
        register={register}
        type='password'
        error={
          errors.password?.message
            ? errors.password?.message.toString()
            : undefined
        }></InputField>
      <Button
        isLoading={isLoading}
        variant={'primary'}
        onClick={handleSubmit(onSubmit)}>
        {formLabels.signIn.message()}
      </Button>
    </CompanyFormLayout>
  )
}

export default SignInWidget
