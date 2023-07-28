import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { CALVEN_API_BASE, CalvenPresenceEvent, CalvenPresenceRequest, CalvenPresenceResponse } from '../types'
import { BaseAuthenticatedClient } from './baseAuthenticatedClient'

/** PresenceClient
 *  This client is used to send presence events to Calven.
 */

export class PresenceClient extends BaseAuthenticatedClient<CalvenPresenceRequest, CalvenPresenceResponse> {
  axios: AxiosInstance

  private static path = '/v1/presence'

  /**
   * Constructor
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `PresenceClient` instance.
   */

  constructor(apiKey: string, secret: string, baseUrl: string = CALVEN_API_BASE, correlationId?: string) {
    super(apiKey, secret, baseUrl, PresenceClient.path, correlationId)
  }

  /**
   * sendPresence
   * This method is used to send presence events to Calven.
   * @param sourceId The source ID to use when sending presence events to Calven.
   * @param presenceEvents The presence events to send to Calven.
   * @returns An instance of `CalvenPresenceResponse`.
   */

  async sendPresence(sourceId: string, presenceEvents: CalvenPresenceEvent[]): Promise<CalvenPresenceResponse> {
    const request: CalvenPresenceRequest = {
      sourceId,
      presenceEvents
    }

    return this.post(request)
  }
}
