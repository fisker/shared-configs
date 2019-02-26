const {writeFileSync} = require('fs')
const {join} = require('path')
const config = require('..')
const pkgLocation = join(__dirname, '../package.json')
const {stringify} = JSON
const pkg = require(pkgLocation)

pkg['renovate-config'] = config

writeFileSync(pkgLocation, stringify(pkg, null, 2))
