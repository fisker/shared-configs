import defaultConfig from '../default-config'
import defineProperties from '../../../../shared/define-properties'

function customize(options = {}) {
  const {overrides = []} = options

  const config = {
    ...defaultConfig,
    ...options,
    overrides: [...defaultConfig.overrides, ...overrides],
  }

  return defineProperties(
    config,
    {customize},
    {
      enumerable: false,
    }
  )
}

export default customize
