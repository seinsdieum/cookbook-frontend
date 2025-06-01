import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { authSelectors } from '../model/auth.slice'
import { routes } from '@lib/routes'

const AdminRoute = () => {
  const authState = useSelector(authSelectors.selectAuth)
  if (authState.access_token === null && authState.user?.role !== 'admin')
    return <Navigate to={routes.login.index} />
  return <Outlet />
}

export default AdminRoute
