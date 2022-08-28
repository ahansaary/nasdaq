import {AppStoreContext} from '.'

export const onInitializeOvermind = ({effects, actions}: AppStoreContext) => {
  const routes = {
    '/': actions.router.showSplashScreen,
    '/stocks': actions.router.showExploreScreen,
    '/stocks/:ticker': actions.router.showStockDetailsScreen
  }
  effects.router.initialize(routes as any)
}
