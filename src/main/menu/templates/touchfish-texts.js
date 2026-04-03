import { app } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/touchfish-texts'
import { t } from '../../i18n'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'TouchFish Texts',
    submenu: [{
      label: t('menu.about'),
      click (menuItem, focusedWindow) {
        showAboutDialog(focusedWindow)
      }
    }, {
      label: t('menu.checkUpdates'),
      click (menuItem, focusedWindow) {
        actions.checkUpdates(focusedWindow)
      }
    }, {
      label: t('menu.preferences'),
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      label: t('menu.services'),
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: t('menu.hide'),
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        actions.osxHide()
      }
    }, {
      label: t('menu.hideOthers'),
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        actions.osxHideAll()
      }
    }, {
      label: t('menu.showAll'),
      click () {
        actions.osxShowAll()
      }
    }, {
      type: 'separator'
    }, {
      label: t('menu.quitApp'),
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
