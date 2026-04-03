import * as contextMenu from './actions'
import i18n from '../../i18n'

// NOTE: This are mutable fields that may change at runtime.

export const SEPARATOR = {
  type: 'separator'
}

export const CLOSE_THIS = {
  get label () { return i18n.t('contextMenuTabs.close') },
  id: 'closeThisTab',
  click (menuItem, browserWindow) {
    contextMenu.closeThis(menuItem._tabId)
  }
}

export const CLOSE_OTHERS = {
  get label () { return i18n.t('contextMenuTabs.closeOthers') },
  id: 'closeOtherTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeOthers(menuItem._tabId)
  }
}

export const CLOSE_SAVED = {
  get label () { return i18n.t('contextMenuTabs.closeSaved') },
  id: 'closeSavedTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeSaved()
  }
}

export const CLOSE_ALL = {
  get label () { return i18n.t('contextMenuTabs.closeAll') },
  id: 'closeAllTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeAll()
  }
}

export const RENAME = {
  get label () { return i18n.t('contextMenuTabs.rename') },
  id: 'renameFile',
  click (menuItem, browserWindow) {
    contextMenu.rename(menuItem._tabId)
  }
}

export const COPY_PATH = {
  get label () { return i18n.t('contextMenuTabs.copyPath') },
  id: 'copyPath',
  click (menuItem, browserWindow) {
    contextMenu.copyPath(menuItem._tabId)
  }
}

export const SHOW_IN_FOLDER = {
  get label () { return i18n.t('contextMenuTabs.showInFolder') },
  id: 'showInFolder',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder(menuItem._tabId)
  }
}
