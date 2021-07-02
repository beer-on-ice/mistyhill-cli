'use strict'

module.exports = core

const packageJson = require('../package')
const { log } = require('@mistyhill-cli/utils')

function core() {
  console.log()
  console.log(` _   _             __  __ _                    ____ _ _ 
| | | |_   _  __ _|  \\/  (_) __ _  ___        / ___| (_)
| |_| | | | |/ _\` | |\\/| | |/ _\` |/ _ \\  ___ | |   | | |
|  _  | |_| | (_| | |  | | | (_| | (_) ||___|| |___| | |
|_| |_|\\__,_|\\__,_|_|  |_|_|\\__,_|\\___/       \\____|_|_|  Version ${packageJson.version}
`)
  log.info('欢迎使用')
  console.log()

  const semver = require('semver')
  const MINIMUM_NODEJS_VERSION = '14.0.0'

  if (semver.lte(process.version, MINIMUM_NODEJS_VERSION)) {
    log.error(`mistyhill-cli 最低要求Node.js版本 v${MINIMUM_NODEJS_VERSION}`)
    process.exit()
  }
}
