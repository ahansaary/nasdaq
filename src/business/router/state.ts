export enum Screen {
  splash = 'SPLASH',
  stocks = 'STOCKS',
  stockDetails = 'STOCK_DETAILS'
}

export type PagePayload = {
  params: {
    [key: string]: string
  }
  query: {
    [key: string]: string
  }
}

export interface RouterState {
  activeScreen: Screen
  payload: PagePayload
}

export const state: RouterState = {
  activeScreen: Screen.splash,
  payload: {
    params: {},
    query: {}
  }
}
