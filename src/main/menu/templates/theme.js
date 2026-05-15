import * as actions from '../actions/theme'
import { t } from '../../i18n'

const builtInThemes = [
  { label: 'Cadmium Light', id: 'light' },
  { label: 'Dark', id: 'dark' },
  { label: 'Graphite Light', id: 'graphite' },
  { label: 'Material Dark', id: 'material-dark' },
  { label: 'One Dark', id: 'one-dark' },
  { label: 'Ulysses Light', id: 'ulysses' }
]

export default function (userPreference) {
  const { theme, customThemes } = userPreference.getAll()
  const allThemes = [...builtInThemes]
  if (customThemes && Array.isArray(customThemes)) {
    for (const ct of customThemes) {
      allThemes.push({ label: ct.name, id: ct.name })
    }
  }

  return {
    label: t('menu.theme'),
    id: 'themeMenu',
    submenu: allThemes.map(t => ({
      label: t.label,
      type: 'radio',
      id: t.id,
      checked: theme === t.id,
      click (menuItem, browserWindow) {
        actions.selectTheme(t.id)
      }
    }))
  }
}
