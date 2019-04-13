import test from 'ava'
import config from '..'
import package_ from '../package.json'

test('package.json', t => {
  t.deepEqual(
    package_['renovate-config'],
    config,
    '`renovate-config` in `package.json` is invalid'
  )
})
