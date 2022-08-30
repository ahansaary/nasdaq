export interface GetPreviousCloseResponse {
  /**
   * The exchange symbol that this item is traded under.
   */
  ticker: string
  /**
   * Whether or not this response was adjusted for splits.
   */
  adjusted: boolean
  /**
   * The number of aggregates (minute or day) used to generate the response.
   */
  queryCount: number
  /**
   * A request id assigned by the server.
   */
  request_id: string
  /**
   * The total number of results for this request.
   */
  resultsCount: number
  /**
   * The status of this request's response.
   */
  status: string
  results: {
    /**
     * The close price for the symbol in the given time period.
     */
    c: number
    /**
     * The highest price for the symbol in the given time period.
     */
    h: number
    /**
     * The lowest price for the symbol in the given time period.
     */
    l: number
    /**
     * The number of transactions in the aggregate window.
     */
    n: number
    /**
     * The open price for the symbol in the given time period.
     */
    o: number
    /**
     * The Unix Msec timestamp for the start of the aggregate window.
     */
    t: number
    /**
     * The trading volume of the symbol in the given time period.
     */
    v: number
    /**
     * The volume weighted average price.
     */
    vw: number
  }[]
}
