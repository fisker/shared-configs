import {readPackageAsync} from 'read-pkg'
import writePackage from 'write-pkg'
import {PACKAGE_FIELD, PACKAGE_JSON_DIR} from '../constants.mjs'

async function cleanPackage(cwd) {
  const package_ = await readPackageAsync({
    cwd,
    normalize: false,
  })
  delete package_[PACKAGE_FIELD]
  await writePackage(PACKAGE_JSON_DIR, package_)
}

cleanPackage(PACKAGE_JSON_DIR)
