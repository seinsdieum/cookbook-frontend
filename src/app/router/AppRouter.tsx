import { ForgotPasswordWidget } from '@/widgets/forgot-password'
import { PrivateRoute } from '@entities/auth'
import { routes } from '@lib/routes'
import { HomePage } from '@pages/home'
import { LoginPage } from '@pages/login'
import { RegisterWidget } from '@/widgets/register'
import { SignInWidget } from '@/widgets/sign-in'
import i18next from 'i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ResetPasswordWidget } from '@/widgets/restore-password'
import { Layout } from '@/widgets/layout'

const AppRouter = ({ isLoaded }: { isLoaded: boolean }) => {
  if (!isLoaded) return null

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.home.index}
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={routes.login.index} element={<LoginPage />}>
          <Route index element={<SignInWidget />} />
        </Route>
        <Route path={routes.register.index} element={<LoginPage />}>
          <Route index element={<RegisterWidget />} />
        </Route>
        <Route path={routes.forgotPassword.index} element={<LoginPage />}>
          <Route index element={<ForgotPasswordWidget />} />
        </Route>
        <Route path={routes.resetPassword.index} element={<LoginPage />}>
          <Route index element={<ResetPasswordWidget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
