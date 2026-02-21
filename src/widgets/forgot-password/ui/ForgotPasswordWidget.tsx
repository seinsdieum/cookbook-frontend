import { CompanyFormLayout } from '@ui'
import { Link } from 'react-router-dom'
import { routes } from '@lib/routes'
import { cn } from '@lib/classnames'
import { useForgotPassword } from '../model/useForgotPassword'
import {
  authLabels,
  formLabels,
  registerLabels
} from '@lib/information-messages'
import SendEmailForm from './SendEmailForm'
import SendCodeForm from './SendCodeForm'

type Props = {
  className?: string
}

const ForgotPasswordWidget = ({ className }: Props) => {
  const {
    handleSendEmail,
    handleSendCode,
    sessionEmail,
    errorMessage,
    handleResetCode,
    isEmailHandled,
    isLoading
  } = useForgotPassword()

  return (
    <CompanyFormLayout
      className={cn(className)}
      error={isEmailHandled ? undefined : errorMessage}
      title={authLabels.restoreAccess.message()}
      description={
        <p className='bold'>
          <Link to={routes.login.index}>
            {authLabels.backToSignIn.message()}
          </Link>
        </p>
      }>
      {isEmailHandled && (
        <p>{authLabels.codeSentToEmail.message(sessionEmail ?? '')}</p>
      )}

      {isEmailHandled ? (
        <SendCodeForm
          isReset={errorMessage !== undefined}
          onReset={handleResetCode}
          isLoading={isLoading}
          onSubmit={handleSendCode}
        />
      ) : (
        <SendEmailForm isLoading={isLoading} onSubmit={handleSendEmail} />
      )}
    </CompanyFormLayout>
  )
}

export default ForgotPasswordWidget
