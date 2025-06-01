import { useRef } from 'react'
import styles from './style.module.css'
import { useDebounceCallback } from 'usehooks-ts'
import Button from '../../Button/Button'
import { cn } from '@/shared/lib/classnames'

interface SearchInputProps {
  onSearch: (value: string) => void
  delay?: number
  variant?: 'default' | 'extended'
  onHelpClick?: () => void
}

const SearchInput = ({
  onSearch,
  delay = 500,
  variant = 'default',
  onHelpClick
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedSearch = useDebounceCallback(
    (value: string) => onSearch(value),
    delay
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (variant === 'default') {
      debouncedSearch(value)
    } else {
      onSearch(value)
    }
  }

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className={cn(styles.wrapper, variant === 'extended' && styles.extended)}
      onClick={handleFocus}>
      <span className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='Search...'
        onChange={handleChange}
      />
      {variant === 'extended' && (
        <Button
          type='button'
          variant='primary'
          className={styles.helpButton}
          onClick={e => {
            e.stopPropagation() // чтобы клик по кнопке не фокусировал инпут
            onHelpClick?.()
          }}
          aria-label='Help'>
          SEARCH
        </Button>
      )}
    </div>
  )
}

export default SearchInput
