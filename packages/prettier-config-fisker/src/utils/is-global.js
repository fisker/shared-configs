import global from '../global'

function isGlobal(key, value) {
  const globalValue = global[key]

  return globalValue === value
}

export default isGlobal
