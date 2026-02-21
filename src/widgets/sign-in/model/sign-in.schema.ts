import { errorMessages } from '@lib/information-messages'
import { z } from 'zod'
const signInSchema = z.object({
  email: z.string().email(errorMessages.invalidEmail.message()),
  password: z
    .string()
    .min(8, errorMessages.minPasswordLength.message(8))
    .max(16, errorMessages.maxPasswordLength.message(16))
})

export default signInSchema
type SignInSchema = z.infer<typeof signInSchema>
export type { SignInSchema }
