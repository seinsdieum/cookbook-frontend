import { authHandlers } from '@entities/auth'
import { profileHandlers } from '@entities/profile'

const apiMockHandlers = [...profileHandlers, ...authHandlers]
export default apiMockHandlers
