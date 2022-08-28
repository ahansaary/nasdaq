import {IContext} from 'overmind'
import {namespaced} from 'overmind/config'
import * as settings from './settings'
import * as stocks from './stocks'

export const config = namespaced({
  settings,
  stocks
})

export type AppStoreContext = IContext<typeof config>
