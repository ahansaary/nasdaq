import {AxiosError} from 'axios'
import {ApiService} from 'src/domain/datasources/api.service'
import {DataFailed, DataSuccess} from 'src/domain/models/data-state.model'
import {GetStockDetailsResponse} from 'src/domain/models/get-stock-details-response.model'
import {GetStocksResponse} from 'src/domain/models/get-stocks-response.model'
import {GetStockDetailsParams} from 'src/domain/params/get-stock-details.params'
import {GetStocksParams} from 'src/domain/params/get-stocks.params'
import Api from './api'

export class ApiServiceImpl implements ApiService {
  async getStocks(params: GetStocksParams) {
    try {
      const res = await Api.get<GetStocksResponse>('/', {params})
      return new DataSuccess<GetStocksResponse>(res.data)
    } catch (error) {
      const errorMessage = (error as AxiosError).message
      return new DataFailed<GetStocksResponse>(errorMessage)
    }
  }

  async getStockDetails(params: GetStockDetailsParams) {
    try {
      const res = await Api.get<GetStockDetailsResponse>('/', {params})
      return new DataSuccess<GetStockDetailsResponse>(res.data)
    } catch (error) {
      const errorMessage = (error as AxiosError).message
      return new DataFailed<GetStockDetailsResponse>(errorMessage)
    }
  }
}
