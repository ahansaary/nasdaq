import {DataState} from '../models/data-state.model'
import {GetStockDetailsResponse} from '../models/get-stock-details-response.model'
import {GetStocksResponse} from '../models/get-stocks-response.model'
import {GetStockDetailsParams} from '../params/get-stock-details.params'
import {GetStocksParams} from '../params/get-stocks.params'

export interface ApiService {
  getStocks: (params: GetStocksParams) => Promise<DataState<GetStocksResponse>>

  getMoreStocks: (nextUrl: string) => Promise<DataState<GetStocksResponse>>

  getStockDetails: (
    params: GetStockDetailsParams
  ) => Promise<DataState<GetStockDetailsResponse>>
}
