import global from '../global.mjs'

function isGlobalConfig(key, value) {
  const globalValue = global[key]

  return globalValue === value
}

export default isGlobalConfig
