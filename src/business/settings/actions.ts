import {AppStoreContext} from '..'
import {Locale, Mode} from './state'

export const changeLocale = ({state}: AppStoreContext, locale: Locale) => {
  state.settings.locale = locale
}

export const changeMode = ({state}: AppStoreContext, mode: Mode) => {
  state.settings.mode = mode
}
