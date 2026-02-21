import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const validationMessages = {
  emailRequired: {
    key: 'validation.emailRequired',
    message: () => t('validation.emailRequired'),
    level: 'warning'
  },
  emailInvalid: {
    key: 'validation.emailInvalid',
    message: () => t('validation.emailInvalid'),
    level: 'warning'
  },
  passwordRequired: {
    key: 'validation.passwordRequired',
    message: () => t('validation.passwordRequired'),
    level: 'warning'
  },
  passwordTooShort: {
    key: 'validation.passwordTooShort',
    message: (params: { min: number }) =>
      t('validation.passwordTooShort', { min: params.min }),
    level: 'warning'
  },
  passwordTooLong: {
    key: 'validation.passwordTooLong',
    message: (params: { max: number }) =>
      t('validation.passwordTooLong', { max: params.max }),
    level: 'warning'
  },
  passwordsMismatch: {
    key: 'validation.passwordsMismatch',
    message: () => t('validation.passwordsMismatch'),
    level: 'warning'
  }
} as const satisfies Record<string, InformationLabel<any>>
