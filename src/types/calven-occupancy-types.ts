import { CalvenEventResult, CalvenLocationType } from './calven-types'

export interface CalvenOccupancyRequest {
  sourceId: string
  occupancyEvents: CalvenOccupancyEvent[]
}

export interface CalvenOccupancyEvent {
  eventId: string
  timestamp: Date
  locationId: String
  locationType: CalvenLocationType
  occupancy: number
  occupied: boolean
}

export interface CalvenOccupancyResponse {
  sourceId: string
  timestamp: Date
  results: CalvenEventResult[]
}
