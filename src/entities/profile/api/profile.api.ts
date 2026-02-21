import { api } from '@api'
import profileRoute from './profile.route'
import { UserEntity } from '@shared-types/entities'

export const profileApi = api.injectEndpoints({
  endpoints: build => ({
    fetchProfile: build.query<UserEntity, void>({
      query: () => profileRoute,
      providesTags: ['Profile']
    })
  })
})

export const { useFetchProfileQuery } = profileApi
