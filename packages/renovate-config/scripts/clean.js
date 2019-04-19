import {writeFileSync} from 'fs'
import readPackage from 'read-pkg'
import writePackage from 'write-pkg'
import * as presets from '../presets'
import {PACKAGE_FIELD, PACKAGE_JSON_DIR} from '../constants'

async function cleanPackage(cwd) {
  const package_ = await readPackage({
    cwd,
    normalize: false,
  })
  delete package_[PACKAGE_FIELD]
  await writePackage(PACKAGE_JSON_DIR, package_)
}

cleanPackage(PACKAGE_JSON_DIR)
