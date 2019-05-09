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
// prepend
module.exports = require('@fisker/husky-config').prepend({
  'pre-commit': 'yarn test',
})

// append
module.exports = require('@fisker/husky-config').append({
  'pre-commit': 'yarn test',
})
```

## Overrides

```js
// use overrides method
module.exports = require('@fisker/husky-config').overrides({
  'pre-commit': 'yarn test',
})
```

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)
