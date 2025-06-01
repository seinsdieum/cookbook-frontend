import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const authLabels = {
  login: {
    key: 'auth.login',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  logout: {
    key: 'auth.logout',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  register: {
    key: 'auth.register',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  forgotPassword: {
    key: 'auth.forgotPassword',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  resetPassword: {
    key: 'auth.resetPassword',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  alreadyHaveAccount: {
    key: 'auth.alreadyHaveAccount',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  dontHaveAccount: {
    key: 'auth.dontHaveAccount',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  codeSentToEmail: {
    key: 'auth.codeSentToEmail',
    level: 'info',
    message(email: string) {
      return t(this.key, { email })
    }
  },
  backToSignIn: {
    key: 'auth.backToSignIn',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  restoreAccess: {
    key: 'auth.restoreAccess',
    level: 'info',
    message() {
      return t(this.key)
    }
  }
} as const satisfies Record<string, InformationLabel<any>>
