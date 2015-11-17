'use strict'

const test = require('tap').test
const cmdname = require('../')
const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn

test('should return last item of process.execPath', function(t) {
  t.plan(1)
  t.equal(cmdname(), path.basename(process.execPath))
})

test('should work for symlinks', function(t) {
  var fp = path.join(__dirname, 'exething')
  fs.createReadStream(process.execPath)
    .pipe(fs.createWriteStream(fp))
    .on('finish', function() {
      fs.chmodSync(fp, '777')
      var child = spawn(fp, [path.join(__dirname, 'fixtures', 'cmd.js')])
      var data = ''
      child.stdout.on('data', function(chunk) {
        data += chunk.toString()
      })
      child.stderr.on('data', function(chunk) {
        t.fail('nope')
      })
      child.on('close', function() {
        t.equal(data.trim(), 'exething')
        fs.unlinkSync(fp)
        t.end()
      })
    })
})
