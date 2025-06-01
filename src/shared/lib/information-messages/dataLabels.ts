import { InformationLabel } from '@/shared/types/frontend'
import { t } from 'i18next'

export const dataLabels = {
  showMore: {
    key: 'data.showMore',
    level: 'info',
    message() {
      return t(this.key)
    }
  }
} as const satisfies Record<string, InformationLabel<any>>
