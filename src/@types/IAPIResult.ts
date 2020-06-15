export interface IAPIResult<T = unknown> {
  status: 'success' | 'failed'
  code: number
  data: T
}
