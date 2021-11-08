import defineProperties from '../../../shared/define-properties.mjs'
import toCommands from './to-commands.mjs'
import toHooks from './to-hooks.mjs'
import unique from './unique.mjs'
import defaultHooks from './default-hooks.mjs'

const EXTEND_POSITION_APPEND = Symbol('append')
const EXTEND_POSITION_PREPEND = Symbol('prepend')

class Configuration {
  constructor(hooks) {
    this.commands = {
      ...toCommands(hooks),
    }
  }

  extends(customize = {}, position = EXTEND_POSITION_APPEND) {
    customize = toCommands(customize)
    const {commands} = this

    const keys = unique([...Object.keys(commands), ...Object.keys(customize)])

    const [before, after] =
      position === EXTEND_POSITION_APPEND
        ? [commands, customize]
        : [customize, commands]

    const extended = {}

    for (const hook of keys) {
      const commandsFirst = before[hook] || []
      const commandsAfter = after[hook] || []
      extended[hook] = [...commandsFirst, ...commandsAfter]
    }

    return getConfig(extended)
  }

  prepend(customize = {}) {
    return this.extends(customize, EXTEND_POSITION_PREPEND)
  }

  append(customize = {}) {
    return this.extends(customize, EXTEND_POSITION_APPEND)
  }

  overrides(customize = {}) {
    return getConfig({
      ...this.commands,
      ...customize,
    })
  }

  get config() {
    const config = {
      hooks: toHooks(this.commands),
    }

    const {prepend, append, overrides} = Configuration.prototype

    return defineProperties(
      config,
      {
        prepend: prepend.bind(this),
        append: append.bind(this),
        overrides: overrides.bind(this),
      },
      {
        enumerable: false,
      },
    )
  }
}

function getConfig(hooks = defaultHooks) {
  return new Configuration(hooks).config
}

export default getConfig
