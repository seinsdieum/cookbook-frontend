import { api } from '@api'
import AuthModel from '../model/auth.model'
import LoginInputModel from '../model/login-input.model'
import authRoute from './auth.route'
import { setJwt } from '@lib/jwt-storage'
import { authActions } from '../model/auth.slice'

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    refresh: build.mutation<AuthModel, { refresh_token: string }>({
      query: input => ({
        url: `${authRoute}/refresh`,
        method: 'POST',
        body: input
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(authActions.setAuth(data))
        } catch {
          dispatch(authActions.resetAuth())
        }
      }
    }),
    login: build.mutation<{ refresh_token: string }, LoginInputModel>({
      query: input => ({
        url: `${authRoute}/login`,
        method: 'POST',
        body: input
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          await new Promise(res => setTimeout(res, 500))
          const { refresh_token } = data
          setJwt(refresh_token)
          await dispatch(
            authApi.endpoints.refresh.initiate({ refresh_token })
          ).unwrap()
        } catch {
          dispatch(authActions.resetAuth())
        }
      }
    }),
    register: build.mutation<{ refresh_token: string }, RegisterInputModel>({
      query: input => ({
        url: `${authRoute}/register`,
        method: 'POST',
        body: input
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { refresh_token } = data
          setJwt(refresh_token)
          await dispatch(
            authApi.endpoints.refresh.initiate({ refresh_token })
          ).unwrap()
        } catch {
          dispatch(authActions.resetAuth())
        }
      }
    }),
    requestPasswordReset: build.mutation<
      { session_token: string },
      { email: string }
    >({
      query: input => ({
        url: `${authRoute}/forgot-password`,
        method: 'POST',
        body: input
      })
    }),
    sendPasswordResetCode: build.mutation<
      { session_token: string },
      ResetPasswordSessionModel
    >({
      query: input => ({
        url: `${authRoute}/send-password-reset-code`,
        method: 'POST',
        body: input
      })
    }),
    resetPassword: build.mutation<
      { refresh_token: string },
      ResetPasswordInputModel
    >({
      query: input => ({
        url: `${authRoute}/reset-password`,
        method: 'POST',
        body: input
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          await new Promise(res => setTimeout(res, 500))
          const { refresh_token } = data
          setJwt(refresh_token)
          await dispatch(
            authApi.endpoints.refresh.initiate({ refresh_token })
          ).unwrap()
        } catch {
          dispatch(authActions.resetAuth())
        }
      }
    })
  })
})
