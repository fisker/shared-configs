import test from 'ava'
import package_ from './package.json'
import * as presets from './presets'
import {PACKAGE_FIELD} from './constants'

test('package.json', t => {
  t.truthy(presets.default, 'should has default preset')

  t.deepEqual(
    package_[PACKAGE_FIELD],
    presets,
    `\`${PACKAGE_FIELD}\` in \`package.json\` is invalid'`
  )
})
