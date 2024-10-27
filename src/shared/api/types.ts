export type HttpStatusCode =
  | 200
  | 201
  | 204 // Success
  | 400
  | 401
  | 403
  | 404
  | 409 // Client Error
  | 500
  | 502
  | 503
  | 504; // Server Error

export type ErrorCode = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'FORBIDDEN' | 'NOT_FOUND' | 'CONFLICT' | 'INTERNAL_SERVER_ERROR' | 'NETWORK_ERROR' | 'UNKNOWN_ERROR';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
