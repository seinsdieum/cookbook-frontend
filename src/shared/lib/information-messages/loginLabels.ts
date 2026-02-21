import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const loginLabels = {
  welcomeBack: {
    key: 'login.welcomeBack',
    message: () => t('login.welcomeBack'),
    level: 'info'
  },
  newHere: {
    key: 'login.newHere',
    message: () => t('login.newHere'),
    level: 'info'
  },
  createAccount: {
    key: 'login.createAccount',
    message: () => t('login.createAccount'),
    level: 'info'
  }
} as const satisfies Record<string, InformationLabel<any>>
