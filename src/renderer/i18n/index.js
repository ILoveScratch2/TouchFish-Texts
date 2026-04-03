import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../locales/en'
import zhCN from '../locales/zh-CN'

Vue.use(VueI18n)

const SUPPORTED_LOCALES = ['en', 'zh-CN']

/**
 * Detect the best matching locale from the system language.
 * Falls back to 'en' if no match is found.
 */
function detectSystemLocale () {
  const systemLocales = navigator.languages || [navigator.language || 'en']
  for (const lang of systemLocales) {
    // Exact match
    if (SUPPORTED_LOCALES.includes(lang)) return lang
    // Prefix match (e.g. 'zh-CN-Hans' -> 'zh-CN', 'zh' -> 'zh-CN')
    const prefix = lang.split('-')[0]
    if (prefix === 'zh') return 'zh-CN'
    if (SUPPORTED_LOCALES.includes(prefix)) return prefix
  }
  return 'en'
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: {
    en,
    'zh-CN': zhCN
  }
})

/**
 * Resolve a locale value, treating 'system' as a request to auto-detect.
 * @param {string} locale
 * @returns {string} a locale from SUPPORTED_LOCALES
 */
export function resolveLocale (locale) {
  if (locale === 'system') {
    return detectSystemLocale()
  }
  return SUPPORTED_LOCALES.includes(locale) ? locale : 'en'
}

/**
 * Apply the given locale to the i18n instance.
 * @param {string} locale - e.g. 'en', 'zh-CN', or 'system'
 */
export function applyLocale (locale) {
  const resolved = resolveLocale(locale)
  i18n.locale = resolved
}

export { detectSystemLocale, SUPPORTED_LOCALES }
export default i18n
