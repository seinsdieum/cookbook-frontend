import { errorMessages } from '@lib/information-messages'
import { z } from 'zod'
const emailSchema = z.object({
  email: z.string().email(errorMessages.invalidEmail.key)
})

export default emailSchema
type EmailSchema = z.infer<typeof emailSchema>
export type { EmailSchema }
