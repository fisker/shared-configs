import isUndefined from '../../../../shared/is-undefined'
import SUPPORTED_OPTIONS from './supported-options'
import extensionsToGlob from './extensions-to-glob'
import isGlobalConfig from './is-global-config'

function toOverride({extensions, config}) {
  const files = extensionsToGlob(extensions)

  const options = SUPPORTED_OPTIONS.reduce((options, key) => {
    const value = config[key]
    if (!isUndefined(value) && !isGlobalConfig(key, value)) {
      options[key] = value
    }

    return options
  }, {})

  return {
    files,
    options,
  }
}

export default toOverride
