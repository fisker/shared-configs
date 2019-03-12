import test from 'ava'
import config from '..'
import pkg from '../package.json'

test('package.json', t => {
  t.deepEqual(
    pkg['renovate-config'],
    config,
    '`renovate-config` in `package.json` is invalid'
  )
})
