import fiskerEslintConfig from './packages/eslint-config/index.js'

export default [
  ...fiskerEslintConfig,
  {
    ignores: `
# also lint dot files
!.*

# vendors
**/node_modules/**
**/vendors/**
**/vendor/**
**/third-party/**

# build file
**/dist/**
**/*.min.*

# fixtures
**/fixtures/**

# test
**/.nyc_output/**
**/coverage/**

# yarn
**/.yarn

# project glob
`
      .split('\n')
      .filter((pattern) => pattern && !pattern.startsWith('#')),
  },
]
