export interface CalvenApiTokenResponse {
  authenticated: boolean
  message: string
  token: string
  expiration: number
}

export interface CalvenApiTokenRequest {
  apiKey: string
  timestamp: number
  hash: string
}
