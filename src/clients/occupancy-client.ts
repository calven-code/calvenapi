import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { CalvenOccupancyEvent, CalvenOccupancyRequest, CalvenOccupancyResponse } from '../types'
import { BaseAuthenticatedClient } from './baseAuthenticatedClient'
import { CALVEN_API_BASE } from '../types'

/**
 * OccupancyClient
 * This client is used to send occupancy events to Calven.
 */

export class OccupancyClient extends BaseAuthenticatedClient<CalvenOccupancyRequest, CalvenOccupancyResponse> {
  axios: AxiosInstance

  private static path = '/v1/occupancy'

  /**
   * Constructor
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `OccupancyClient` instance.
   */

  constructor(apiKey: string, secret: string, baseUrl: string = CALVEN_API_BASE, correlationId?: string) {
    super(apiKey, secret, baseUrl, OccupancyClient.path, correlationId)
  }

  /**
   * sendOccupancy
   * This method is used to send occupancy events to Calven.
   * @param sourceId The source ID to use when sending occupancy events to Calven.
   * @param occupancyEvents The occupancy events to send to Calven.
   * @returns An instance of `CalvenOccupancyResponse`.
   */

  async sendOccupancy(sourceId: string, occupancyEvents: CalvenOccupancyEvent[]): Promise<CalvenOccupancyResponse> {
    const request: CalvenOccupancyRequest = {
      sourceId,
      occupancyEvents
    }

    return this.post(request)
  }
}
