import { dataLabels } from '@lib/information-messages'
import { Button } from '@ui'
import { cn } from '@lib/classnames'
import { ReactNode } from 'react'
import style from './style.module.css'
type Props = {
  variant?: 'default' | 'primary'
  onExpand?: VoidFunction
  children?: ReactNode
  preTitle: string
  title: string
}

const ShowcaseSectionMock = ({
  variant = 'default',
  onExpand,
  preTitle,
  title,
  children
}: Props) => {
  return (
    <div className={cn(style.showcase, style[variant], 'shape')}>
      <p className={cn('label')}>{preTitle}</p>
      <h2 className={cn('text-center')}>{title}</h2>
      <div className={cn(style.content, 'page-container')}>{children}</div>
      <Button
        size='tall'
        variant={variant === 'default' ? 'secondary' : 'secondary-reverse'}
        onClick={onExpand}>
        {dataLabels.showMore.message()}
      </Button>
    </div>
  )
}

export default ShowcaseSectionMock
