import { useEffect, useState } from 'react'
import { authApi } from '../api/auth.api'
import { getJwt } from '@lib/jwt-storage'
import { authActions } from './auth.slice'
import { useDispatch } from 'react-redux'

export const useRefreshAuth = () => {
  const [isRefreshing, setIsRefreshing] = useState(true)
  const [refresh] = authApi.useRefreshMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    const doRefresh = async () => {
      const refresh_token = getJwt()
      if (!refresh_token) {
        dispatch(authActions.resetAuth())
        setIsRefreshing(false)
        return
      }

      try {
        await refresh({ refresh_token }).unwrap()
      } catch {
        dispatch(authActions.resetAuth())
      } finally {
        setIsRefreshing(false)
      }
    }

    doRefresh()
  }, [])

  return { isRefreshing }
}
