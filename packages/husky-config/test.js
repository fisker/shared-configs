import test from 'ava'
import config from './src'
import defaultHooks from './src/default-hooks'
import toHooks from './src/to-hooks'

const hooks = toHooks(defaultHooks)
const testHook = Object.keys(hooks)[0]
const testCommand = `echo "${new Date()}"`

test('default', (t) => {
  t.deepEqual(config.hooks, hooks)
})

test('prepend', (t) => {
  const modified = config.prepend({
    [testHook]: testCommand,
  })

  t.is(modified.hooks[testHook], `${testCommand} && ${hooks[testHook]}`)
})

test('append', (t) => {
  const modified = config.append({
    [testHook]: testCommand,
  })

  t.is(modified.hooks[testHook], `${hooks[testHook]} && ${testCommand}`)
})

test('overrides', (t) => {
  const modified = config.overrides({
    [testHook]: [testCommand],
  })

  t.is(modified.hooks[testHook], testCommand)
})

test('overrides with falsely value', (t) => {
  const modified = config.overrides({
    [testHook]: null,
  })

  t.is(modified.hooks[testHook], undefined)
})

test('chained', (t) => {
  const modified = config
    .overrides({
      [testHook]: null,
    })
    .prepend({
      [testHook]: ['prepend', testCommand],
    })
    .append({
      [testHook]: ['append', testCommand],
    })

  t.is(
    modified.hooks[testHook],
    ['prepend', testCommand, 'append', testCommand].join(' && ')
  )
})
