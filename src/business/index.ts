import {IContext} from 'overmind'
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook
} from 'overmind-react'
import {namespaced} from 'overmind/config'
import * as settings from './settings'
import * as stocks from './stocks'

export const config = namespaced({
  settings,
  stocks
})

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()

export type AppStoreContext = IContext<typeof config>
