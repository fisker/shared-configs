import {writeFileSync} from 'fs'
import readPackage from 'read-pkg'
import writePackage from 'write-pkg'
import * as presets from '..'
import {PACKAGE_STORE_FIELD, PACKAGE_JSON_DIR} from '../constants'

async function updatePackage(cwd, data) {
  const package_ = await readPackage({
    cwd,
    normalize: false,
  })
  await writePackage(PACKAGE_JSON_DIR, {
    ...package_,
    ...data,
  })
}

updatePackage(PACKAGE_JSON_DIR, {
  [PACKAGE_STORE_FIELD]: presets,
})
