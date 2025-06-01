import { useMemo } from 'react'

export const useClassName = (
  statement: boolean,
  positiveClassName: string,
  negativeClassName: string
) => {
  const className = useMemo(
    () => (statement ? positiveClassName : negativeClassName),
    [statement]
  )

  return className
}
