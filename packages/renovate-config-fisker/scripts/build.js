const {writeFileSync} = require('fs')
const {join} = require('path')
const config = require('..')

const packageLocation = join(__dirname, '../package.json')
const {stringify} = JSON
const package_ = require(packageLocation)

package_['renovate-config'] = config

writeFileSync(packageLocation, stringify(package_, null, 2))
