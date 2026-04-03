const os = require('os')
const path = require('path')
const { _electron } = require('playwright')
// require('electron') returns the path to the actual electron binary (electron.exe on
// Windows, electron on macOS/Linux). Using this avoids the .cmd batch-file wrapper on
// Windows, which prevents Playwright from connecting to the Electron DevTools endpoint.
const electronBinary = require('electron')

const mainEntrypoint = 'dist/electron/main.js'

const getDateAsFilename = () => {
  const date = new Date()
  return '' + date.getFullYear() + (date.getMonth() + 1) + date.getDay()
}

const getTempPath = () => {
  const name = 'touchfish-texts-e2etest-' + getDateAsFilename()
  return path.join(os.tmpdir(), name)
}

const getElectronPath = () => electronBinary

const launchElectron = async userArgs => {
  userArgs = userArgs || []
  const executablePath = getElectronPath()
  // In CI environments (especially Windows), Electron needs these flags to launch successfully.
  const ciArgs = process.env.CI ? ['--no-sandbox', '--disable-gpu', '--disable-software-rasterizer'] : []
  const args = [mainEntrypoint, '--user-data-dir', getTempPath()].concat(ciArgs).concat(userArgs)
  const app = await _electron.launch({
    executablePath,
    args,
    timeout: 30000
  })
  const page = await app.firstWindow()
  await page.waitForLoadState('domcontentloaded')
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { app, page }
}

module.exports = { getElectronPath, launchElectron}
