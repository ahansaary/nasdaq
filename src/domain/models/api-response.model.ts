export interface ApiResponse<T> {
  results: T
  /**
   * If present, this value can be used to fetch the next page of data.
   */
  next_url?: string
  /**
   * A request id assigned by the server.
   */
  request_id: string
  /**
   * The total number of results for this request.
   */
  count: number
  /**
   * The status of this request's response.
   */
  status: string
}
