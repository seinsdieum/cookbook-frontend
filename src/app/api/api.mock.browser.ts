import { setupWorker } from 'msw/browser'
import apiMockHandlers from './api.mock.handlers'

const apiMockWorker = setupWorker(...(apiMockHandlers as any))
export { apiMockWorker as worker }
