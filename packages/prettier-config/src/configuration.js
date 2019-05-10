import defaults from './default-config'
import defineProperties from '../../../shared/define-properties'

class Configuration {
  constructor(options = {}) {
    this.options = options
  }

  extend(customize = {}) {
    const {options} = this
    const {overrides = []} = options

    const {overrides: customizeOverrides = []} = customize

    const extended = {
      ...options,
      ...customize,
      overrides: [...overrides, ...customizeOverrides],
    }

    return getConfig(extended)
  }

  get config() {
    const {options} = this
    const {overrides = []} = options

    const config = {
      ...options,
    }

    if (overrides.length !== 0) {
      config.overrides = [...overrides]
    }

    const {extend} = Configuration.prototype

    return defineProperties(
      config,
      {
        extend: extend.bind(this),
      },
      {
        enumerable: false,
      }
    )
  }
}

function getConfig(options = defaults) {
  return new Configuration(options).config
}

export default getConfig
