import { cn } from '@lib/classnames'
import { IconName, icons } from '@lib/icons'
import style from './style.module.css'
import { MouseEventHandler } from 'react'
type Props = {
  name: IconName
  className?: string
  size?: number | string
  fill?: string
  'aria-label'?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export const Icon = ({
  name = 'xMark',
  className,
  size = '1em',
  fill = 'currentColor',
  onClick,
  ...rest
}: Props) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.log(IconComponent)
    console.warn(`Icon "${name}" not found.`)
    return null
  }

  return (
    <IconComponent
      width={size}
      height={size}
      fill={fill}
      className={cn('inline-block', style.icon, className)}
      {...rest}
      onClick={onClick}
    />
  )
}
