import {IContext} from 'overmind'
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook
} from 'overmind-react'
import {merge, namespaced} from 'overmind/config'
import * as actions from './actions'
import * as router from './router'
import * as settings from './settings'
import * as stocks from './stocks'

export const config = merge(
  {actions},
  namespaced({
    router,
    settings,
    stocks
  })
)

export const useAppState = createStateHook<AppStoreContext>()
export const useActions = createActionsHook<AppStoreContext>()
export const useEffects = createEffectsHook<AppStoreContext>()
export const useReaction = createReactionHook<AppStoreContext>()

export type AppStoreContext = IContext<typeof config>
