import i18n from '@/i18n'

const builtInThemes = [
  { name: 'light' },
  { name: 'dark' },
  { name: 'graphite' },
  { name: 'material-dark' },
  { name: 'ulysses' },
  { name: 'one-dark' }
]

export const getAllThemes = (customThemes = []) => {
  const custom = customThemes.map(t => ({ name: t.name, custom: true }))
  return [...builtInThemes, ...custom]
}

export { builtInThemes as themes }

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
