import global from '../global.js'

function isGlobalConfig(key, value) {
  const globalValue = global[key]

  return globalValue === value
}

export default isGlobalConfig
