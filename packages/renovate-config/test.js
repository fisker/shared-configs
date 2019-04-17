// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava'
// eslint-disable-next-line unicorn/import-index
import config from './index'
import package_ from './package.json'

test('package.json', t => {
  t.deepEqual(
    package_['renovate-config'],
    config,
    '`renovate-config` in `package.json` is invalid'
  )
})
