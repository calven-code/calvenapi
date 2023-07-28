// eslint-disable-next-line @typescript-eslint/array-type
export type ServiceErrorDetails =
  | Record<string, unknown>
  | Array<Record<string, unknown>>
  | null
  | unknown

export class ServiceError extends Error {
  statusCode: number
  defaultMessage: string
  details?: ServiceErrorDetails

  static errorName = 'CalvenApiError'

  constructor(
    statusCode: number,
    message: string,
    defaultMessage = '',
    details?: ServiceErrorDetails
  ) {
    super(message)
    this.statusCode = statusCode
    this.defaultMessage = defaultMessage
    this.details = details
    this.name = ServiceError.errorName
  }

  static isServiceError(err: unknown): boolean {
    const error = err as Error
    return error && error.name === ServiceError.errorName
  }
}
