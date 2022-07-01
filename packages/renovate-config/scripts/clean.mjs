import {readPackage} from 'read-pkg'
import {writePackage} from 'write-pkg'
import {PACKAGE_FIELD, PACKAGE_JSON_DIR} from '../constants.mjs'

async function cleanPackage(cwd) {
  const packageJson = await readPackage({
    cwd,
    normalize: false,
  })
  delete packageJson[PACKAGE_FIELD]
  await writePackage(PACKAGE_JSON_DIR, packageJson)
}

await cleanPackage(PACKAGE_JSON_DIR)
