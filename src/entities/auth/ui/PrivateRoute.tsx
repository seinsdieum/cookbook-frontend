import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { authSelectors } from '../model/auth.slice'
import { routes } from '@lib/routes'
type Props = {
  children?: React.ReactNode
}
const PrivateRoute = ({ children }: Props) => {
  const authState = useSelector(authSelectors.selectAuth)
  useEffect(() => {}, [authState.user])
  if (authState.access_token === null)
    return <Navigate to={routes.login.index} />
  return children ?? <Outlet />
}

export default PrivateRoute
