import { errorMessages } from '@lib/information-messages'
import { z } from 'zod'

const resetCodeSchema = z.object({
  resetCode: z.string().length(6)
})

export default resetCodeSchema
type ResetCodeSchema = z.infer<typeof resetCodeSchema>
export type { ResetCodeSchema }
