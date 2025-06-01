import { cn } from '@lib/classnames'
import React from 'react'
import style from './style.module.css'
interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string
}

const Image = ({ className, ...imageProps }: Props) => {
  return (
    <img {...imageProps} className={cn('shape', style.image, className)}></img>
  )
}

export default Image
