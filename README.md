# cmdname

[![Build Status](https://travis-ci.org/evanlucas/cmdname.svg)](https://travis-ci.org/evanlucas/cmdname)
[![Coverage Status](https://coveralls.io/repos/evanlucas/cmdname/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/cmdname?branch=master)

Get the name of the executable used.

## Install

```bash
$ npm install [--save] cmdname
```

## Test

```bash
$ npm test
```

## Usage

```bash
$ cat test.js

console.log(require('cmdname')())

$ node test.js
> 'node'

$ nsolid test.js
> 'nsolid'
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
