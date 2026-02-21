import { errorMessages } from '@lib/information-messages'
import { z } from 'zod'
const restorePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, errorMessages.minPasswordLength.key)
      .max(16, errorMessages.maxPasswordLength.key),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: errorMessages.passwordsDontMatch.message()
  })

export default restorePasswordSchema
type RestorePasswordSchema = z.infer<typeof restorePasswordSchema>
export type { RestorePasswordSchema }
