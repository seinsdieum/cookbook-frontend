import { InformationLabel } from '../../types/frontend'
import { t } from 'i18next'

export const successMessages = {
  accountCreated: {
    key: 'success.accountCreated',
    message: () => t('success.accountCreated'),
    level: 'success'
  },
  settingsUpdated: {
    key: 'success.settingsUpdated',
    message: () => t('success.settingsUpdated'),
    level: 'success'
  },
  passwordChanged: {
    key: 'success.passwordChanged',
    message: () => t('success.passwordChanged'),
    level: 'success'
  }
} as const satisfies Record<string, InformationLabel>
