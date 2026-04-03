import path from 'path'
import { shell } from 'electron'
import { isFile } from 'common/filesystem'
import * as actions from '../actions/help'
import { checkUpdates } from '../actions/touchfish-texts'
import { t } from '../../i18n'

/// Check whether the package is updatable at runtime.
const isUpdatable = () => {
  // TODO: If not updatable, allow to check whether there is a new version available.

  const resFile = isFile(path.join(process.resourcesPath, 'app-update.yml'))
  if (!resFile) {
    // No update resource file available.
    return false
  } else if (process.env.APPIMAGE) {
    // We are running as AppImage.
    return true
  } else if (process.platform === 'win32' && isFile(path.join(process.resourcesPath, 'md.ico'))) {
    // Windows is a little but tricky. The update resource file is always available and
    // there is no way to check the target type at runtime (electron-builder#4119).
    // As workaround we check whether "md.ico" exists that is only included in the setup.
    return true
  }

  // Otherwise assume that we cannot perform an auto update (standalone binary, archives,
  // packed for package manager).
  return false
}

export default function () {
  const helpMenu = {
    label: t('menu.help'),
    role: 'help',
    submenu: [{
      label: t('menu.quickStart'),
      click () {
        shell.openExternal('https://touchfishtexts.ilovescratch.us.ci/quick-start')
      }
    }, {
      label: t('menu.markdownReference'),
      click () {
        shell.openExternal('https://touchfishtexts.ilovescratch.us.ci/markdown-syntax')
      }
    }, {
      label: t('menu.changelog'),
      click () {
        shell.openExternal('https://touchfishtexts.ilovescratch.us.ci/changelog')
      }
    }, {
      label: t('menu.reportIssue'),
      click () {
        shell.openExternal('https://github.com/ILoveScratch2/TouchFish-Texts/issues')
      }
    }, {
      type: 'separator'
    }, {
      label: t('menu.website'),
      click () {
        shell.openExternal('https://touchfishtexts.ilovescratch.us.ci')
      }
    }, {
      label: t('menu.watchGithub'),
      click () {
        shell.openExternal('https://github.com/ILoveScratch2/TouchFish-Texts')
      }
    }, {
      label: t('menu.followGithub'),
      click () {
        shell.openExternal('https://github.com/ILoveScratch2/')
      }
    }, {
      type: 'separator'
    }, {
      label: t('menu.license'),
      click () {
        shell.openExternal('https://touchfishtexts.ilovescratch.us.ci/license')
      }
    }]
  }

  if (isUpdatable()) {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: t('menu.checkUpdates'),
      click (menuItem, browserWindow) {
        checkUpdates(browserWindow)
      }
    })
  }

  if (process.platform !== 'darwin') {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: t('menu.aboutApp'),
      click (menuItem, browserWindow) {
        actions.showAboutDialog(browserWindow)
      }
    })
  }
  return helpMenu
}
