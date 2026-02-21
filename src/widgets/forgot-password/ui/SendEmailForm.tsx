import { SubmitHandler, useForm } from 'react-hook-form'
import emailSchema, { EmailSchema } from '../model/email.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { formLabels } from '@lib/information-messages'
import { Button, InputField } from '@ui'
import { Fragment } from 'react'
import { t } from 'i18next'

type Props = {
  onSubmit?: SubmitHandler<EmailSchema>
  isLoading?: boolean
}

const SendEmailForm = ({ onSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EmailSchema>({ resolver: zodResolver(emailSchema) })

  return (
    <Fragment>
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
      <Button
        isLoading={isLoading}
        onClick={onSubmit && handleSubmit(onSubmit)}
        variant='primary'
        size='default'>
        {formLabels.send.message()}
      </Button>
    </Fragment>
  )
}

export default SendEmailForm
