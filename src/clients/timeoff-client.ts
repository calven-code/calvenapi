import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { CALVEN_API_BASE, CalvenTimeOffEvent, CalvenTimeOffRequest, CalvenTimeOffResponse } from '../types'
import { BaseAuthenticatedClient } from './baseAuthenticatedClient'

/** TimeoffClient
 *  This client is used to send time off events to Calven.
 */

export class TimeoffClient extends BaseAuthenticatedClient<CalvenTimeOffRequest, CalvenTimeOffResponse> {
  axios: AxiosInstance

  private static path = '/v1/timeoff'

  /**
   * Constructor
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `TimeoffClient` instance.
   */

  constructor(apiKey: string, secret: string, baseUrl: string = CALVEN_API_BASE, correlationId?: string) {
    super(apiKey, secret, baseUrl, TimeoffClient.path, correlationId)
  }

  /**
   * SendTimeOff
   * This method is used to send time off events to Calven.
   * @param timeOffEvents The time off events to send to Calven.
   * @returns A `CalvenTimeOffResponse` instance.
   */

  async sendTimeOff(timeOffEvents: CalvenTimeOffEvent[]): Promise<CalvenTimeOffResponse> {
    const request: CalvenTimeOffRequest = {
      timeOffEvents
    }

    return this.post(request)
  }
}
