import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { BaseClient } from './baseClient'
import { CalvenApiTokenRequest, CalvenApiTokenResponse } from '../types'
import * as crypto from 'crypto'

export class AuthClient extends BaseClient<CalvenApiTokenRequest, CalvenApiTokenResponse> {
  axios: AxiosInstance

  private static path = '/v1/auth'

  private token: CalvenApiTokenResponse | undefined

  constructor(
    private readonly apiKey: string,
    private readonly secret: string,
    baseUrl: string,
    correlationId?: string
  ) {
    super(baseUrl, AuthClient.path, correlationId)
  }

  async getToken(): Promise<CalvenApiTokenResponse> {
    const timestamp = Math.floor(Date.now() / 1000)
    const hash = this.generateHash(this.apiKey, this.secret, timestamp)

    const request: CalvenApiTokenRequest = {
      apiKey: this.apiKey,
      timestamp,
      hash
    }

    return this.post(request)
  }

  private generateHash(apiKey: string, apiSecret: string, timestamp: number): string {
    const hash = crypto
      .createHmac('sha256', apiSecret)
      .update(apiKey + timestamp)
      .digest('hex')

    return hash
  }
}
