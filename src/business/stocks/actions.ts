import {debounce, filter, pipe} from 'overmind'
import {DataFailed, DataSuccess} from 'src/domain/models/data-state.model'
import {AppStoreContext} from '..'

export const getStocks = async (
  {state, effects}: AppStoreContext,
  search?: string
) => {
  state.stocks.isLoadingTickers = true

  if (search) state.stocks.query.search = search

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

export const getMoreStocks = async ({state, effects}: AppStoreContext) => {
  if (!state.stocks.tickers?.next_url) return

  state.stocks.isLoadingMoreTickers = true

  const res = await effects.stocks.api.getMoreStocks(
    state.stocks.tickers.next_url
  )

  if (res instanceof DataSuccess) {
    state.stocks.tickers = {
      ...res.data,
      results: [...state.stocks.tickers.results, ...res.data.results],
      count: state.stocks.tickers.count + res.data.count
    }
    state.stocks.error = null
  }

  if (res instanceof DataFailed) {
    state.stocks.error = res.error
  }

  state.stocks.isLoadingMoreTickers = false
}

export const getStockDetails = async (
  {state, effects}: AppStoreContext,
  ticker: string
) => {
  state.stocks.isLoadingTickerDetails = true

  const res = await effects.stocks.api.getStockDetails({ticker})

  if (res instanceof DataSuccess) {
    state.stocks.ticker = res.data.results
    state.stocks.error = null
  }

  if (res instanceof DataFailed) {
    state.stocks.error = res.error
  }

  state.stocks.isLoadingTickerDetails = false
}

export const searchStocks = pipe(
  ({state}: AppStoreContext, search: string) => {
    state.stocks.query.search = search
    return search
  },
  filter((_, search) => search?.length > 2 || !search),
  debounce(300),
  getStocks
)
