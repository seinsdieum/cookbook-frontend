import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, CodeInput } from '@ui'
import { Fragment, useEffect } from 'react'
import resetCodeSchema, { ResetCodeSchema } from '../model/reset-code.schema'

type Props = {
  onSubmit: SubmitHandler<ResetCodeSchema>
  isLoading?: boolean
  isReset?: boolean
  onReset?: VoidFunction
}

const SendCodeForm = ({
  onSubmit,
  isLoading,
  isReset: isError,
  onReset
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset
  } = useForm<ResetCodeSchema>({
    resolver: zodResolver(resetCodeSchema)
  })
  const code = watch('resetCode', '')

  useEffect(() => {
    if (isError) {
      reset()
      onReset?.()
    }
  }, [reset, isError])
  if (isLoading) return <Button isLoading />
  return (
    <Fragment>
      <CodeInput
        isError={isError}
        value={code}
        onFill={handleSubmit(onSubmit)}
        onChange={val => setValue('resetCode', val)}
        name='six-code'
        register={register}
      />
    </Fragment>
  )
}

export default SendCodeForm
