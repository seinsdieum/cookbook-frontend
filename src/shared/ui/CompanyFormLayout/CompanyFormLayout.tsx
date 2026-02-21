import { cn } from '@lib/classnames'
import Button from '../Button/Button'
import ProductLogo from '../ProductLogo/ProductLogo'
import style from './style.module.css'
import ErrorLabel from '../ErrorLabel/ErrorLabel'

type Props = {
  title?: string
  description?: React.ReactNode
  children?: React.ReactNode
  error?: string
  className?: string
  isErrorPlaceTaken?: boolean
}

const CompanyFormLayout = ({
  title,
  description,
  children,
  error,
  className,
  isErrorPlaceTaken = true
}: Props) => {
  return (
    <div className={cn(style.container, className, 'shape')}>
      <ProductLogo className={style.logo} />
      <div className={style.greetings}>
        {title && <h2>{title}</h2>}
        {description}
      </div>
      <div className={style.inputs}>{children}</div>

      <ErrorLabel
        isPlaceTaken={isErrorPlaceTaken}
        isShown={error !== undefined}>
        {error}
      </ErrorLabel>
    </div>
  )
}

export default CompanyFormLayout
