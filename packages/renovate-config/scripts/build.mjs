import {readPackage} from 'read-pkg'
import {writePackage} from 'write-pkg'
import {PACKAGE_FIELD, PACKAGE_JSON_DIR} from '../constants.mjs'
import * as presets from '../presets/index.mjs'

async function updatePackage(cwd, data) {
  const packageJson = await readPackage({
    cwd,
    normalize: false,
  })
  await writePackage(PACKAGE_JSON_DIR, {
    ...packageJson,
    ...data,
  })
}

await updatePackage(PACKAGE_JSON_DIR, {
  [PACKAGE_FIELD]: presets,
})
