import {GetPreviousCloseResponse} from 'src/domain/models/get-previous-close-response.model'
import {TickerDetails} from 'src/domain/models/get-stock-details-response.model'
import {GetStocksResponse} from 'src/domain/models/get-stocks-response.model'
import {GetStocksParams} from 'src/domain/params/get-stocks.params'

export interface StocksState {
  tickers: GetStocksResponse | null
  ticker: TickerDetails | null
  previousClose: GetPreviousCloseResponse | null
  query: GetStocksParams
  cache: {
    [ticker: string]: {
      ticker: TickerDetails | null
      previousClose: GetPreviousCloseResponse | null
    }
  }
  isLoadingTickers: boolean
  isLoadingMoreTickers: boolean
  isLoadingTickerDetails: boolean
  isLoadingPreviousClose: boolean
  error: string | null
}

export const state: StocksState = {
  tickers: null,
  ticker: null,
  previousClose: null,
  query: {
    active: true,
    market: 'stocks',
    limit: 10,
    order: 'asc'
  },
  cache: {},
  isLoadingTickers: true,
  isLoadingMoreTickers: false,
  isLoadingTickerDetails: true,
  isLoadingPreviousClose: true,
  error: null
}
