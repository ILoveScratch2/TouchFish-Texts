import i18n from '@/i18n'

export const themes = [
  {
    name: 'light'
  },
  {
    name: 'dark'
  },
  {
    name: 'graphite'
  },
  {
    name: 'material-dark'
  },
  {
    name: 'ulysses'
  },
  {
    name: 'one-dark'
  }
]

export const autoSwitchThemeOptions = [{
  get label () { return i18n.t('prefThemeOptions.autoSwitchAtStartup') },
  value: 0
}, /* {
  label: 'Only at runtime',
  value: 1
}, */ {
  get label () { return i18n.t('prefThemeOptions.autoSwitchNever') },
  value: 2
}]
