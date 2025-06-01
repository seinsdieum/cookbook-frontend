import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const errorMessages = {
  minPasswordLength: {
    key: 'errorMsg.minPasswordLength',
    level: 'error',
    message(count: number) {
      return t(this.key, { count })
    }
  },
  maxPasswordLength: {
    key: 'errorMsg.maxPasswordLength',
    level: 'error',
    message(count: number) {
      return t(this.key, { count })
    }
  },
  accountEmailExists: {
    key: 'errorMsg.accountEmailExists',
    level: 'error',
    message(email: string) {
      return t(this.key, { email })
    }
  },
  invalidEmail: {
    key: 'errorMsg.invalidEmail',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  passwordsDontMatch: {
    key: 'errorMsg.passwordsDontMatch',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  userNotFound: {
    key: 'errorMsg.userNotFound',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  unauthorized: {
    key: 'errorMsg.unauthorized',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  serverError: {
    key: 'errorMsg.serverError',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  networkError: {
    key: 'errorMsg.networkError',
    level: 'error',
    message() {
      return t(this.key)
    }
  },
  unknownError: {
    key: 'errorMsg.unknownError',
    level: 'error',
    message() {
      return t(this.key)
    }
  }
} as const satisfies Record<string, InformationLabel<any>>
