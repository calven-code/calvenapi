import { CalvenEventResult } from './calven-types'

export interface CalvenTimeOffRequest {
  timeOffEvents: CalvenTimeOffEvent[]
}

export interface CalvenTimeOffEvent {
  eventId: string
  email?: string
  uid?: string
  eventType: CalvenTimeOffEventType
  startDate: Date
  endDate: Date
  timeOffType?: CalvenTimeOffType
}

export enum CalvenTimeOffEventType {
  CANCELLED = 'cancelled',
  SCHEDULED = 'scheduled'
}

export enum CalvenTimeOffType {
  HOLIDAY = 'holiday',
  LEAVE = 'leave',
  SICK = 'sick'
}

export interface CalvenTimeOffResponse {
  timestamp: Date
  results: CalvenEventResult[]
}
