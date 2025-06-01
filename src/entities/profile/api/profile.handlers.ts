import { http, HttpResponse } from 'msw'
import profileRoute from './profile.route'
import profileMocks from './profile.mocks'
import { serverUrl } from '@config'

const profileHandlers = [
  http.get(`${serverUrl}${profileRoute}`, ({ params, request }) => {
    const token = request?.headers.get('Authorization')
    if (!token)
      return HttpResponse.json(
        { errorMessage: 'Not Authorized' },
        { status: 401 }
      )
    const mock = profileMocks.find(x => x.pk_id === 3)
    if (!mock) HttpResponse.json({ errorMessage: 'Not Found' }, { status: 404 })
    return HttpResponse.json(mock)
  })
]

export default profileHandlers
