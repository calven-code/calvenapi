import { CalvenEventResult, CalvenLocationType } from './calven-types'

export interface CalvenPresenceRequest {
  sourceId: string
  presenceEvents: CalvenPresenceEvent[]
}

export interface CalvenPresenceEvent {
  eventId: string
  timestamp: Date
  locationId: String
  locationType: CalvenLocationType
  sourceUserId: string
  userId?: string
  userEmail?: string
}

export interface CalvenPresenceResponse {
  sourceId: string
  timestamp: Date
  results: CalvenEventResult[]
}
