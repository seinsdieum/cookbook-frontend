const REFRESH_TOKEN = 'refresh_token'

export const clearJwt = () => {
  localStorage.removeItem(REFRESH_TOKEN)
}

export const setJwt = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN, token)
}

export const getJwt = () => localStorage.getItem(REFRESH_TOKEN)
