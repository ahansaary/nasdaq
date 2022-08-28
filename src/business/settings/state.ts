export type Locale = 'en' | 'ar'
export type Mode = 'light' | 'dark'

export interface SettingsState {
  locale: Locale
  mode: Mode
}

export const state: SettingsState = {
  locale: 'en',
  mode: 'light'
}
