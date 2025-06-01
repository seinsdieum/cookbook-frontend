import { UseFormRegister } from 'react-hook-form'
import style from './style.module.css'
import { cn } from '@lib/classnames'
import { Link } from 'react-router-dom'
type InputFieldProps = {
  label?: string
  link?: { to: string; title: string }
  placeholder?: string
  name: string
  type?: string
  register: UseFormRegister<any>
  error?: string
}
const InputField = ({
  label,
  name,
  link,
  type = 'text',
  register,
  error,
  placeholder
}: InputFieldProps) => (
  <div className={cn(style.field, error && style.hasError)}>
    {label && (
      <label className={style.label} htmlFor={name}>
        <p>{label}</p>
        {link && (
          <Link to={link.to}>
            <p>{link.title}</p>
          </Link>
        )}
      </label>
    )}
    <input
      className={style.input}
      placeholder={placeholder}
      type={type}
      id={name}
      {...register(name)}
    />
    {error && <span className={style.errorTooltip}>{error}</span>}
  </div>
)

export default InputField
