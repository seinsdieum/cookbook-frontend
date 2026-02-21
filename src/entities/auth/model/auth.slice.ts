import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AuthModel from './auth.model'
import { clearJwt } from '@lib/jwt-storage'

const initialState: AuthModel = {
  user: null,
  access_token: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthModel>) => {
      state.user = action.payload.user ?? null
      state.access_token = action.payload.access_token
    },
    resetAuth: state => {
      ;(state.user = null), (state.access_token = null)
      clearJwt()
    }
  },
  selectors: {
    selectAuth: state => {
      return state
    }
  }
})

const selectors = authSlice.selectors
const actions = authSlice.actions
export { actions as authActions, selectors as authSelectors }
export default authSlice.reducer
