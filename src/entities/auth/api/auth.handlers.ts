import { serverUrl } from '@config'
import { delay, http, HttpResponse } from 'msw'
import authRoute from './auth.route'
import AuthModel from '../model/auth.model'
import LoginInputModel from '../model/login-input.model'

interface AccountMock extends AuthModel {
  refresh_token: string | null
  password: string
}
const userMocks: AccountMock[] = [
  {
    user: {
      pk_id: 1,
      email: 'alexellipse1@yandex.by',
      name: 'Alexander1',
      role: 'client'
    },
    access_token: 'lil',
    refresh_token: 'lulz',
    password: '11111111'
  }
]

const validEmail = 'user@example.com'
const validSessionToken = 'mock-session-token'
const validResetCode = '123456'

const authHandlers = [
  http.post(`${serverUrl}${authRoute}/login`, async ({ request }) => {
    await delay(1000)
    const data = (await request.json()) as LoginInputModel
    const { email, password } = data
    const user = userMocks.find(
      x => x.password === password && x.user?.email === email
    )
    if (!user)
      return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
    return HttpResponse.json({ refresh_token: 'lulz' })
  }),
  http.post(`${serverUrl}${authRoute}/register`, async ({ request }) => {
    await delay(1000)

    const data = (await request.json()) as RegisterInputModel
    const { email, password, confirmPassword } = data
    const user = userMocks.find(x => x.user?.email === email)

    if (user)
      return HttpResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    if (password !== confirmPassword)
      return HttpResponse.json(
        { error: 'Confirm password is different' },
        { status: 400 }
      )
    return HttpResponse.json({ refresh_token: 'lulz' })
  }),
  http.post(`${serverUrl}${authRoute}/refresh`, async ({ params, request }) => {
    await delay(1000)

    const { refresh_token } = (await request.json()) as {
      refresh_token: string
    }
    const userMock = userMocks.find(x => x.refresh_token === refresh_token)
    if (!userMock)
      return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
    const { access_token, user } = userMock
    return HttpResponse.json({ user, access_token })
  }),
  http.post(`${serverUrl}${authRoute}/forgot-password`, async ({ request }) => {
    await delay(1000)

    const { email } = (await request.json()) as { email: string }

    if (email !== validEmail) {
      return HttpResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return HttpResponse.json({ session_token: validSessionToken })
  }),

  http.post(
    `${serverUrl}${authRoute}/send-password-reset-code`,
    async ({ request }) => {
      await delay(1000)

      const { session_token, reset_code } = (await request.json()) as {
        session_token: string
        reset_code: string
      }

      if (
        session_token !== validSessionToken ||
        reset_code !== validResetCode
      ) {
        return HttpResponse.json(
          { error: 'Invalid session or code' },
          { status: 400 }
        )
      }

      return HttpResponse.json({ session_token: validSessionToken })
    }
  ),

  http.post(`${serverUrl}${authRoute}/reset-password`, async ({ request }) => {
    await delay(1000)

    const { password, confirm_password, session_token } =
      (await request.json()) as {
        password: string
        confirm_password: string
        session_token: string
      }

    if (session_token !== validSessionToken) {
      return HttpResponse.json(
        { error: 'Invalid session token' },
        { status: 401 }
      )
    }

    if (password !== confirm_password) {
      return HttpResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      )
    }

    return HttpResponse.json({ refresh_token: 'lulz' })
  })
]

export { authHandlers }
