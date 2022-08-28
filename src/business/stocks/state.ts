import {TickerDetails} from 'src/domain/models/get-stock-details-response.model'
import {GetStocksResponse} from 'src/domain/models/get-stocks-response.model'
import {GetStocksParams} from 'src/domain/params/get-stocks.params'

export interface StocksState {
  tickers: GetStocksResponse | null
  ticker: TickerDetails | null
  query: GetStocksParams
  isLoadingTickers: boolean
  isLoadingTickerDetails: boolean
  error: string | null
}

export const state: StocksState = {
  tickers: null,
  ticker: null,
  query: {},
  isLoadingTickers: false,
  isLoadingTickerDetails: false,
  error: null
}
