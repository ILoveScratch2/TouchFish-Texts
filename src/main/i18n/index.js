/**
 * i18n js for the main process
 */

import en from '../../renderer/locales/en'
import zhCN from '../../renderer/locales/zh-CN'

const MESSAGES = {
  en,
  'zh-CN': zhCN
}

let _preferences = null

/**
 * Register preferences instance to get cuurent lang
 *
 * @param {Preference} preferences
 */
export function registerPreferences (preferences) {
  _preferences = preferences
}

/**
 * Translate a key to current lang
 *
 * @param {string} key
 * @returns {string}
 */
export function t (key) {
  const locale = _preferences ? (_preferences.getAll().language || 'en') : 'en'
  const messages = MESSAGES[locale] || MESSAGES.en
  const fallback = MESSAGES.en

  const parts = key.split('.')
  let value = messages
  let fallbackValue = fallback
  for (const part of parts) {
    value = value && value[part]
    fallbackValue = fallbackValue && fallbackValue[part]
  }

  if (typeof value === 'string') return value
  if (typeof fallbackValue === 'string') return fallbackValue
  return key
}
