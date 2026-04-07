/**
 * i18n js for the main process
 */

import { app } from 'electron'
import en from '../../renderer/locales/en'
import zhCN from '../../renderer/locales/zh-CN'

const MESSAGES = {
  en,
  'zh-CN': zhCN
}

const SUPPORTED_LOCALES = ['en', 'zh-CN']

function detectSystemLocale () {
  const systemLocale = app.getLocale ? app.getLocale() : 'en'
  if (SUPPORTED_LOCALES.includes(systemLocale)) return systemLocale
  const prefix = systemLocale.split('-')[0]
  if (prefix === 'zh') return 'zh-CN'
  if (SUPPORTED_LOCALES.includes(prefix)) return prefix
  return 'en'
}

function resolveLocale (locale) {
  if (!locale || locale === 'system') return detectSystemLocale()
  return MESSAGES[locale] ? locale : 'en'
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
  const rawLocale = _preferences ? (_preferences.getAll().language || 'system') : 'system'
  const locale = resolveLocale(rawLocale)
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
