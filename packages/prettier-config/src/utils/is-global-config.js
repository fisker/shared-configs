import global from '../global'

function isGlobalConfig(key, value) {
  const globalValue = global[key]

  return globalValue === value
}

export default isGlobalConfig
