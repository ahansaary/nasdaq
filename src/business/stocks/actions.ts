import {DataFailed, DataSuccess} from 'src/domain/models/data-state.model'
import {AppStoreContext} from '..'

export const getStocks = async ({state, effects}: AppStoreContext) => {
  state.stocks.isLoadingTickers = true

  const res = await effects.stocks.api.getStocks(state.stocks.query)

  if (res instanceof DataSuccess) {
    state.stocks.tickers = res.data
    state.stocks.error = null
  }

  if (res instanceof DataFailed) {
    state.stocks.error = res.error
  }

  state.stocks.isLoadingTickers = false
}
