'use strict'

module.exports = core

const packageJson = require('../package')
const { log } = require('@mistyhill-cli/utils')

function core() {
  console.log(` _   _             __  __ _                    ____ _ _ 
| | | |_   _  __ _|  \\/  (_) __ _  ___        / ___| (_)
| |_| | | | |/ _\` | |\\/| | |/ _\` |/ _ \\  ___ | |   | | |
|  _  | |_| | (_| | |  | | | (_| | (_) ||___|| |___| | |
|_| |_|\\__,_|\\__,_|_|  |_|_|\\__,_|\\___/       \\____|_|_|  Version ${packageJson.version}
`)
  log.info('欢迎使用')
}
