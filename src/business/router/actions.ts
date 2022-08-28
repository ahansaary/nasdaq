import {pipe, wait} from 'overmind'
import {getStockDetails, getStocks} from '../stocks/actions'
import {navigate, setActiveScreen} from './operators'
import {Screen} from './state'

export const showSplashScreen = pipe(
  setActiveScreen(Screen.splash),
  wait(2000),
  navigate('/stocks')
)

export const showExploreScreen = pipe(
  setActiveScreen(Screen.stocks),
  (_, payload) => payload.query.search,
  getStocks
)

export const showStockDetailsScreen = pipe(
  setActiveScreen(Screen.stockDetails),
  (_, payload) => payload.params.ticker,
  getStockDetails
)