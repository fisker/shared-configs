import isUndefined from '../../../../shared/is-undefined.js'
import extensionsToGlob from './extensions-to-glob.js'
import isGlobalConfig from './is-global-config.js'
import SUPPORTED_OPTIONS from './supported-options.js'

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
