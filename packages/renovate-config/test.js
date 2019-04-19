import test from 'ava'
import package_ from './package.json'
import * as presets from '.'
import {PACKAGE_STORE_FIELD} from './constants'

test('package.json', t => {
  t.truthy(presets.default, 'should has default preset')

  t.deepEqual(
    package_[PACKAGE_STORE_FIELD],
    presets,
    `\`${PACKAGE_STORE_FIELD}\` in \`package.json\` is invalid'`
  )
})
