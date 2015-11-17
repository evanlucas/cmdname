'use strict'

const path = require('path')

module.exports = function cmdname() {
  const splits = process.execPath.split(path.sep)
  return splits[splits.length - 1]
}
