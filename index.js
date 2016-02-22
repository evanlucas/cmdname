'use strict'

const path = require('path')

module.exports = function cmdname() {
  return path.basename(process.execPath)
}
