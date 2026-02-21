import React, { ReactNode } from 'react'
import style from './style.module.css'
import { IconName } from '@lib/icons'
import { Icon } from '../Icon/Icon'
type Label = {
  icon: IconName
  value: string
}

type Props = { items: Label[] }

const IconLabels = ({ items }: Props) => {
  return (
    <div className={style.labels}>
      {items.map(x => (
        <div key={x.value} className={style.label}>
          <Icon size={'3em'} name={x.icon} />
          <p>{x.value}</p>
        </div>
      ))}
    </div>
  )
}

export default IconLabels
