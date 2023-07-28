export enum CalvenResultCode {
  SUCCESS = 0,
  USERNOTFOUND = 1,
  LOCATIONNOTFOUND = 2
}

export enum CalvenLocationType {
  LOCATION = 'location',
  LEVEL = 'level',
  PLACE = 'place',
  SPACE = 'space',
  ZONE = 'zone'
}

export interface CalvenEventResult {
  eventId: string
  resultCode: CalvenResultCode
  message?: string
}
