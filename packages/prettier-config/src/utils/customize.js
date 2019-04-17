import defaultConfig from '../default-config'

function customize(options = {}) {
  const {overrides = []} = options

  return {
    ...defaultConfig,
    ...options,
    overrides: [...defaultConfig.overrides, ...overrides],
  }
}

export default customize
