import { app } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/touchfish-texts'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'TouchFish Texts',
    submenu: [{
      label: 'About TouchFish Texts',
      click (menuItem, focusedWindow) {
        showAboutDialog(focusedWindow)
      }
    }, {
      label: 'Check for updates...',
      click (menuItem, focusedWindow) {
        actions.checkUpdates(focusedWindow)
      }
    }, {
      label: 'Preferences',
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: 'Hide TouchFish Texts',
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        actions.osxHide()
      }
    }, {
      label: 'Hide Others',
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        actions.osxHideAll()
      }
    }, {
      label: 'Show All',
      click () {
        actions.osxShowAll()
      }
    }, {
      type: 'separator'
    }, {
      label: 'Quit TouchFish Texts',
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
