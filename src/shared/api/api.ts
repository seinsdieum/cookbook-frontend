import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { serverUrl } from '@config'
import apiCacheTags from './tags'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState?.() as { auth: { access_token: string | null } })
        .auth?.access_token
      if (token) headers.set('Authorization', token)
      return headers
    }
  }),
  tagTypes: apiCacheTags,
  endpoints: () => ({})
})
