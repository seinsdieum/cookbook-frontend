import { errorMessages } from '@lib/information-messages'
import { z } from 'zod'
const registerSchema = z
  .object({
    email: z.string().email(errorMessages.invalidEmail.key),
    password: z
      .string()
      .min(8, errorMessages.minPasswordLength.key)
      .max(16, errorMessages.maxPasswordLength.key),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: errorMessages.passwordsDontMatch.message()
  })

export default registerSchema
type RegisterSchema = z.infer<typeof registerSchema>
export type { RegisterSchema }
