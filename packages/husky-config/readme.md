# @fisker/husky-config

> fisker's Shareable husky Configuration

## Install

```sh
yarn add husky @fisker/husky-config --dev
```

## Usage

```js
module.exports = require('@fisker/husky-config')
```

## Customize

```js
// extend

module.exports = require('@fisker/husky-config').extend(
  {
    'pre-commit': 'yarn test',
  },
  'after'
)

// after
module.exports = require('@fisker/husky-config').after({
  'pre-commit': 'yarn test',
})

// before
module.exports = require('@fisker/husky-config').before({
  'pre-commit': 'yarn test',
})
```

## Overrides

```js
// use overrides method
module.exports = require('@fisker/husky-config').overrides({
  'pre-commit': 'yarn test'
})

// OR use spread
module.exports = {
  hooks: {
    ...require('@fisker/husky-config').hooks,
    'pre-commit': 'yarn test'
  },
})
```

** `overrides` method commands can be array **

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)
