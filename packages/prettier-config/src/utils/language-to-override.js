import SUPPORTED_OPTIONS from './supported-options'
import extensionsToGlob from './extensions-to-glob'
import isGlobal from './is-global'
import isUndefined from './is-undefined'

function toOverride(config) {
  const {language} = config
  const files = extensionsToGlob(config.extensions || language)

  const options = SUPPORTED_OPTIONS.reduce((options, key) => {
    const value = config[key]
    if (!isUndefined(value) && !isGlobal(key, value)) {
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
