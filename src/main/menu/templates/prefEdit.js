import { t } from '../../i18n'

export default function (keybindings) {
  return {
    label: t('menu.edit'),
    submenu: [{
      label: t('menu.cut'),
      accelerator: keybindings.getAccelerator('edit.cut'),
      role: 'cut'
    }, {
      label: t('menu.copy'),
      accelerator: keybindings.getAccelerator('edit.copy'),
      role: 'copy'
    }, {
      label: t('menu.paste'),
      accelerator: keybindings.getAccelerator('edit.paste'),
      role: 'paste'
    }, {
      type: 'separator'
    }, {
      label: t('menu.selectAll'),
      accelerator: keybindings.getAccelerator('edit.select-all'),
      role: 'selectAll'
    }]
  }
}
