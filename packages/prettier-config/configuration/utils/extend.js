import defineProperties from '../../../../shared/define-properties.js'
import defaultConfig from '../default-config.js'

function extend(options = {}) {
  const {overrides = []} = options

  const config = {
    ...defaultConfig,
    ...options,
    overrides: [...defaultConfig.overrides, ...overrides],
  }

  return defineProperties(
    config,
    {extend},
    {
      enumerable: false,
    },
  )
}

export default extend
