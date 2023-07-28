import { ServiceError } from '../exception'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class BaseClient<T, R> {
  axios: AxiosInstance

  constructor(
    public readonly baseUrl: string,
    public readonly path = '',
    public readonly correlationId?: string
  ) {
    if (!baseUrl) {
      throw new ServiceError(
        500,
        `Unable to construct ${this.constructor.name} due to missing service URL`,
        'Missing service URL',
        {
          baseUrl,
          path,
        }
      )
    }

    try {
      const url = new URL(path, baseUrl).toString()

      this.axios = axios.create({
        baseURL: url,
      })
    } catch (e) {
      throw new ServiceError(
        500,
        `Unable to construct ${this.constructor.name} with baseUrl '${baseUrl}' and path '${path}'`,
        'Invalid service URL',
        e
      )
    }
  }

  async post(entity: Partial<T>, config?: AxiosRequestConfig): Promise<R> {
    const res = await this.axios.post('/', entity, config)

    return res.data as R
  }
}
