import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const registerLabels = {
  joinUs: {
    key: 'register.joinUs',
    message: () => t('register.joinUs'),
    level: 'info'
  },
  hasAccount: {
    key: 'register.hasAccount',
    message: () => t('register.hasAccount'),
    level: 'info'
  }
} as const satisfies Record<string, InformationLabel>
