export interface GetStocksParams {
  /**
   * Filter by market type. By default all markets are included.
   */
  market?: 'stocks' | 'crypto' | 'fx' | 'otc'

  /**
   * Search for terms within the ticker and/or company name.
   */
  search?: string

  /**
   * Specify if the tickers returned should be actively traded on the queried date. Default is true.
   */
  active?: boolean

  /**
   * The field to sort the results on. Default is ticker. If the search query parameter is present, sort is ignored and results are ordered by relevance.
   */
  sort?: 'ticker' | 'name' | 'market' | 'type' | 'last_updated_utc'

  /**
   * The order to sort the results on. Default is asc (ascending).
   */
  order?: 'asc' | 'desc'

  /**
   * Limit the size of the response, default is 100 and max is 1000.
   *
   * If your query returns more than the max limit and you want to retrieve the next page of results, see the next_url response attribute.
   */
  limit?: number
}
