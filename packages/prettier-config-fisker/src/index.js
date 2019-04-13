import defaultConfig from './default-config'
import customize from './utils/customize'

Object.defineProperty(defaultConfig, 'customize', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: customize,
})

export default defaultConfig
