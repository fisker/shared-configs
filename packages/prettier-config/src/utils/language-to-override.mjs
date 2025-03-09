import isUndefined from '../../../../shared/is-undefined.mjs'
import extensionsToGlob from './extensions-to-glob.mjs'
import isGlobalConfig from './is-global-config.mjs'
import SUPPORTED_OPTIONS from './supported-options.mjs'

function toOverride({extensions, config}) {
  const files = extensionsToGlob(extensions)

  const options = Object.fromEntries(
    SUPPORTED_OPTIONS.map((key) => [key, config[key]]).filter(
      ([key, value]) => !isUndefined(value) && !isGlobalConfig(key, value),
    ),
  )

  return {
    files,
    options,
  }
}

export default toOverride
