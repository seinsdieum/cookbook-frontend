interface AuthModel {
  user: {
    pk_id: number
    name: string
    email: string
    role: 'client' | 'admin'
  } | null
  access_token: string | null
}

export default AuthModel
