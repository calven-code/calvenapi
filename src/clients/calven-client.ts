import { OccupancyClient, PresenceClient, TimeoffClient } from '.'
import { CALVEN_API_BASE } from '../types'

/**
 * Calven client factory
 */

export class CalvenClient {
  /**
   * Create a new `OccupancyClient` instance.
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `OccupancyClient` instance.
   */

  static occupancyClient(
    apiKey: string,
    secret: string,
    baseUrl: string = CALVEN_API_BASE,
    correlationId?: string
  ): OccupancyClient {
    return new OccupancyClient(apiKey, secret, baseUrl, correlationId)
  }

  /**
   * Create a new `PresenceClient` instance
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A bw `PresenceClient` instance.
   */

  static presenceClient(
    apiKey: string,
    secret: string,
    baseUrl: string = CALVEN_API_BASE,
    correlationId?: string
  ): PresenceClient {
    return new PresenceClient(apiKey, secret, baseUrl, correlationId)
  }

  /**
   * Create a new `TimeoffClient` instance
   * @param apiKey The API key to use when authenticating with Calven.
   * @param secret The secret to use when authenticating with Calven.
   * @param baseUrl The base URL to use when sending requests to Calven.  This defaults to `CALVEN_API_BASE`.
   * @param correlationId The correlation ID to use when sending requests to Calven.  This is optional.
   * @returns A new `TimeoffClient` instance.
   */

  static timeoffClient(
    apiKey: string,
    secret: string,
    baseUrl: string = CALVEN_API_BASE,
    correlationId?: string
  ): TimeoffClient {
    return new TimeoffClient(apiKey, secret, baseUrl, correlationId)
  }
}
