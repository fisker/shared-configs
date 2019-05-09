import test from 'ava'
import config from './src'
import defaultHooks from './src/default-hooks'
import toHooks from './src/to-hooks'

const hooks = toHooks(defaultHooks)

test('default', t => {
  t.deepEqual(config.hooks, hooks)
})

test('extends default position', t => {
  const extended = config.extend({
    'pre-commit': 'foo',
  })

  t.is(extended.hooks['pre-commit'], `${hooks['pre-commit']} && foo`)
})

test('extends before', t => {
  const extended = config.extend(
    {
      'pre-commit': 'foo',
    },
    'before'
  )

  t.is(extended.hooks['pre-commit'], `foo && ${hooks['pre-commit']}`)
})

test('extends after', t => {
  const extended = config.extend(
    {
      'pre-commit': 'foo',
    },
    'after'
  )

  t.is(extended.hooks['pre-commit'], `${hooks['pre-commit']} && foo`)
})

test('before', t => {
  const extended = config.before({
    'pre-commit': 'foo',
  })

  t.is(extended.hooks['pre-commit'], `foo && ${hooks['pre-commit']}`)
})

test('after', t => {
  const extended = config.after({
    'pre-commit': 'foo',
  })

  t.is(extended.hooks['pre-commit'], `${hooks['pre-commit']} && foo`)
})

test('overrides', t => {
  const extended = config.overrides({
    'pre-commit': 'foo',
  })

  t.is(extended.hooks['pre-commit'], 'foo')
})
