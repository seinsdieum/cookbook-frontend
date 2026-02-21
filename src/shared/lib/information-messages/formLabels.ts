import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const formLabels = {
  email: {
    key: 'form.email',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  password: {
    key: 'form.password',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  confirmPassword: {
    key: 'form.confirmPassword',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  username: {
    key: 'form.username',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  name: {
    key: 'form.name',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  send: {
    key: 'form.send',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  reset: {
    key: 'form.reset',
    level: 'info',
    message() {
      return t(this.key)
    }
  },
  required: {
    key: 'form.required',
    level: 'warning',
    message() {
      return t(this.key)
    }
  },
  invalid: {
    key: 'form.invalid',
    level: 'warning',
    message() {
      return t(this.key)
    }
  },
  signUp: {
    key: 'form.signUp',
    level: 'warning',
    message() {
      return t(this.key)
    }
  },
  signIn: {
    key: 'form.signIn',
    level: 'warning',
    message() {
      return t(this.key)
    }
  },
  submit: {
    key: 'form.submit',
    level: 'info',
    message() {
      return t(this.key)
    }
  }
} as const satisfies Record<string, InformationLabel>
