import { app, Menu } from 'electron'
import * as actions from '../actions/file'
import { t } from '../../i18n'

const dockMenu = Menu.buildFromTemplate([{
  get label () { return t('menu.dockOpen') },
  click (menuItem, browserWindow) {
    if (browserWindow) {
      actions.openFile(browserWindow)
    } else {
      actions.newEditorWindow()
    }
  }
}, {
  get label () { return t('menu.dockClearRecent') },
  click () {
    app.clearRecentDocuments()
  }
}])

export default dockMenu
