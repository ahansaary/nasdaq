import {FC} from 'react'
import {useAppState} from 'src/business'
import {Screen} from 'src/business/router/state'
import ExploreScreen from './screens/ExploreScreen'
import SplashScreen from './screens/SplashScreen'
import StockDetailsScreen from './screens/StockDetailsScreen'

const defaultScreen = <SplashScreen />

const routes = {
  [Screen.splash]: <SplashScreen />,
  [Screen.stocks]: <ExploreScreen />,
  [Screen.stockDetails]: <StockDetailsScreen />
}

const Router: FC = () => {
  const {activeScreen} = useAppState().router

  return <>{routes[activeScreen] || defaultScreen}</>
}

export default Router
