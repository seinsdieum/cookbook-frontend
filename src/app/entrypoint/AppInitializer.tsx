import { useRefreshAuth } from '@entities/auth'
import { useEffect } from 'react'

type Props = {
  onLoaded?: VoidFunction
}
const AppInitializer = ({ onLoaded }: Props) => {
  const { isRefreshing: isAuthRefreshing } = useRefreshAuth()

  useEffect(() => {
    if (!isAuthRefreshing) setTimeout(() => onLoaded?.(), 1000)
  }, [isAuthRefreshing])
  return null
}

export default AppInitializer
