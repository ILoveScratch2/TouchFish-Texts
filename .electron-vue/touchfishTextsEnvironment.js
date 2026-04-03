const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const { version } = require('../package.json')

const getEnvironmentDefinitions = function () {
  let shortHash = 'N/A'
  let fullHash = 'N/A'
  try {
    const gitRevisionPlugin = new GitRevisionPlugin()
    shortHash = gitRevisionPlugin.version()
    fullHash = gitRevisionPlugin.commithash()
  } catch(_) {
    // Ignore error if we build without git.
  }

  const isStableRelease = !!process.env.TOUCHFISH_TEXTS_IS_STABLE
  const versionSuffix = isStableRelease ? '' : ` (${shortHash})`
  return {
    'global.TOUCHFISH_TEXTS_GIT_SHORT_HASH': JSON.stringify(shortHash),
    'global.TOUCHFISH_TEXTS_GIT_HASH': JSON.stringify(fullHash),

    'global.TOUCHFISH_TEXTS_VERSION': JSON.stringify(version),
    'global.TOUCHFISH_TEXTS_VERSION_STRING': JSON.stringify(`v${version}${versionSuffix}`),
    'global.TOUCHFISH_TEXTS_IS_STABLE': JSON.stringify(isStableRelease)
  }
}

const getRendererEnvironmentDefinitions = function () {
  const env = getEnvironmentDefinitions()
  return {
    'process.versions.TOUCHFISH_TEXTS_VERSION': env['global.TOUCHFISH_TEXTS_VERSION'],
    'process.versions.TOUCHFISH_TEXTS_VERSION_STRING': env['global.TOUCHFISH_TEXTS_VERSION_STRING'],
  }
}

module.exports = {
  getEnvironmentDefinitions: getEnvironmentDefinitions,
  getRendererEnvironmentDefinitions: getRendererEnvironmentDefinitions
}
