import {DataState} from '../models/data-state.model'
import {GetPreviousCloseResponse} from '../models/get-previous-close-response.model'
import {GetStockDetailsResponse} from '../models/get-stock-details-response.model'
import {GetStocksResponse} from '../models/get-stocks-response.model'
import {GetPreviousCloseParams} from '../params/get-previous-close.params'
import {GetStockDetailsParams} from '../params/get-stock-details.params'
import {GetStocksParams} from '../params/get-stocks.params'

export interface ApiRepository {
  getStocks: (params: GetStocksParams) => Promise<DataState<GetStocksResponse>>

  getStockDetails: (
    params: GetStockDetailsParams
  ) => Promise<DataState<GetStockDetailsResponse>>

  getPreviousClose: (
    params: GetPreviousCloseParams
  ) => Promise<DataState<GetPreviousCloseResponse>>
}
