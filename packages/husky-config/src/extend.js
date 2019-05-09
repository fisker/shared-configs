import toHooks from './to-hooks'
import toCommands from './to-commands'
import defaultHooks from './default-hooks'
import unique from './unique'
import defineProperties from '../../../shared/define-properties'

function exportConfig(hooks) {
  const config = {
    hooks: toHooks(hooks),
  }

  return defineProperties(
    config,
    {extend, after, before, overrides},
    {
      enumerable: false,
    }
  )
}

function after(customize = {}) {
  return extend(customize, 'after')
}

function before(customize = {}) {
  return extend(customize, 'before')
}

function extend(customize = {}, position = 'after') {
  customize = toCommands(customize)

  const keys = unique([
    ...Object.keys(defaultHooks),
    ...Object.keys(customize),
  ]).sort()

  const [first, second] =
    position === 'before'
      ? [customize, defaultHooks]
      : [defaultHooks, customize]

  const extended = {}

  for (const hook of keys) {
    extended[hook] = [...(first[hook] || []), ...(second[hook] || [])]
  }

  return exportConfig(extended)
}

function overrides(customize = {}) {
  return exportConfig({
    ...defaultHooks,
    ...customize,
  })
}

export default extend
