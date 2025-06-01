import React, { useRef, useEffect } from 'react'
import style from './style.module.css'
import { UseFormRegister } from 'react-hook-form'
import { cn } from '@/shared/lib/classnames'

type CodeInputProps = {
  name: string
  length?: number
  isError?: boolean
  register: UseFormRegister<any>
  value?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFill?: (e: React.BaseSyntheticEvent) => void
  disabled?: boolean
  'aria-label'?: string
}

const CodeInput: React.FC<CodeInputProps> = ({
  name,
  length = 6,
  isError = false,
  register,
  value = '',
  onChange,
  onBlur,
  onFill,
  disabled = false,
  'aria-label': ariaLabel = 'Verification code input'
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const hasFiredOnFillRef = useRef(false)

  const characters = value.padEnd(length).split('')

  const handleClickContainer = () => {
    if (!disabled) {
      inputRef.current?.focus()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, length)
    onChange?.(raw)
  }

  useEffect(() => {
    if (value.length === length && !hasFiredOnFillRef.current) {
      const syntheticEvent = {
        nativeEvent: {} as Event,
        currentTarget: inputRef.current!,
        target: inputRef.current!,
        preventDefault: () => {},
        stopPropagation: () => {}
      } as React.BaseSyntheticEvent

      onFill?.(syntheticEvent)
      hasFiredOnFillRef.current = true
    }

    if (value.length < length) {
      hasFiredOnFillRef.current = false
    }
  }, [value, length, onFill])

  return (
    <div
      className={style.codeContainer}
      onClick={handleClickContainer}
      role='group'
      aria-label={ariaLabel}
      aria-invalid={isError}>
      <input
        autoFocus
        type='text'
        inputMode='numeric'
        autoComplete='one-time-code'
        maxLength={length}
        {...register(name)}
        ref={el => {
          register(name).ref(el)
          inputRef.current = el
        }}
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
        disabled={disabled}
        className={style.hiddenInput}
        aria-hidden='true'
        aria-label={ariaLabel}
      />

      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className={cn(style.codeBox, isError && style.error)}
          aria-hidden='true'
          data-error={isError}>
          {characters[index] !== ' ' && <p>{characters[index]}</p>}
        </div>
      ))}
    </div>
  )
}

export default CodeInput
