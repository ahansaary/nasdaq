import {AppStoreContext} from '..'
import {PagePayload, Screen} from './state'

export const navigate =
  (url: string) =>
  ({effects}: AppStoreContext) => {
    effects.router.open(url)
  }

export const setActiveScreen =
  (screen: Screen) =>
  ({state}: AppStoreContext, payload: PagePayload) => {
    state.router.activeScreen = screen
    state.router.payload.params = {...payload.params}
    state.router.payload.query = {...payload.query}
    return payload
  }
