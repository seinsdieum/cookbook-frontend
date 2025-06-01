import { cn } from '@lib/classnames'
import React from 'react'
import style from './style.module.css'
import DotsLoader from '../DotsLoader/DotsLoader'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'secondary-reverse' | 'default'
  size?: 'default' | 'tall' | 'tight'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  isLoading,
  ...props
}) => {
  return (
    <button
      disabled={props.disabled || isLoading}
      className={cn(
        style.btn,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}>
      {isLoading ? <DotsLoader /> : children}
    </button>
  )
}

const variantClasses = {
  primary: style.primary,
  secondary: style.secondary,
  ['secondary-reverse']: style.secondaryReverse,
  default: style.default
}

const sizeClasses = {
  default: style.sizeDefault,
  tall: style.sizeTall,
  tight: style.sizeTight
}

export default Button
