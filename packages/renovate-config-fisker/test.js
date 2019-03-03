import test from 'ava'
import m from '.'
import pkg from './package.json'

test('automerge is set', t => {
  t.true(m.default.devDependencies.automerge)
})

test('package.json', t => {
  t.deepEqual(
    pkg['renovate-config'],
    m,
    '`renovate-config` in `package.json` is invalid'
  )
})
