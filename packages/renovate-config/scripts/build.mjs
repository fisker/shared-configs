import fs from 'node:fs/promises'
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

  for (const [preset, value] of Object.entries(data['renovate-config'])) {
    await fs.writeFile(
      new URL(`../${preset}.json`, import.meta.url),
      JSON.stringify(value, undefined, 2) + '\n',
    )
  }
}

await updatePackage(PACKAGE_JSON_DIR, {
  [PACKAGE_FIELD]: presets,
})
