import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { BaseClient } from './baseClient'
import { CalvenApiTokenResponse, CalvenTimeOffRequest, CalvenTimeOffResponse } from '../types'
import { AuthClient } from './auth-client'

export class BaseAuthenticatedClient<T, R> extends BaseClient<T, R> {
  axios: AxiosInstance

  private token?: CalvenApiTokenResponse

  constructor(
    private readonly apiKey: string,
    private readonly secret: string,
    baseUrl: string,
    path: string,
    correlationId?: string
  ) {
    super(baseUrl, path, correlationId)
    this.axios.interceptors.request.use(async c => this.intercept(c))
  }

  async intercept(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
    if (!this.token || this.token.expiration < Date.now()) {
      const authClient = new AuthClient(this.apiKey, this.secret, this.baseUrl, this.correlationId)

      this.token = await authClient.getToken()
    }
    if (this.correlationId) {
      config.headers.correlationId = this.correlationId
    }

    return {
      ...config,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      headers: {
        Authorization: `Bearer ${this.token.token}`,
        'content-type': 'application/json',
        ...config.headers
      }
    }
  }
}
