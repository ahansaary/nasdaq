import {GetPreviousCloseParams} from 'src/domain/params/get-previous-close.params'
import {GetStockDetailsParams} from 'src/domain/params/get-stock-details.params'
import {GetStocksParams} from 'src/domain/params/get-stocks.params'
import {ApiRepository} from 'src/domain/repositories/api.repository'
import {ApiServiceImpl} from '../datasources/api.service'

const apiService = new ApiServiceImpl()

export class ApiRepositoryImpl implements ApiRepository {
  getStocks(params: GetStocksParams) {
    return apiService.getStocks(params)
  }

  getMoreStocks(nextUrl: string) {
    return apiService.getMoreStocks(nextUrl)
  }

  getStockDetails(params: GetStockDetailsParams) {
    return apiService.getStockDetails(params)
  }

  getPreviousClose(params: GetPreviousCloseParams) {
    return apiService.getPreviousClose(params)
  }
}
