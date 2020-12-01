import defaultConfig from '../default-config.mjs'
import defineProperties from '../../../../shared/define-properties.mjs'

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
    }
  )
}

export default extend
