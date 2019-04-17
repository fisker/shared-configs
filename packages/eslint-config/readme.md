# eslint-config-fisker

> fisker's Shareable ESLint Configuration

## Install

```sh
# with yarn
yarn add --dev eslint prettier eslint-config-fisker
```

## .eslintrc.js

### default

```js
module.exports = {
  root: true,
  extends: ['@fisker'],
}
```

### es5

```js
module.exports = {
  root: true,
  extends: ['@fisker/eslint-config/legacy'],
}
```

- [difference with `default`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-legacy.md)

### vue

```js
module.exports = {
  root: true,
  extends: ['@fisker/eslint-config/vue'],
}
```

### test

```js
module.exports = {
  root: true,
  extends: ['@fisker/eslint-config/test'],
}
```

- jest
- jasmine
- mocha

## foreign config & plugins

### eslint-config-airbnb-base

- [compare `fisker` to `airbnb-base`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-airbnb.md)
- [compare `fisker` to `airbnb-base` + `prettier`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-airbnb-prettier.md)
- [compare `fisker/legacy` to `airbnb-base/legacy`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-legacy-airbnb-legacy.md)
- [compare `fisker/legacy` to `airbnb-base/legacy` + `prettier`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-legacy-airbnb-legacy-prettier.md)

### eslint-config-prettier

- [compare `fisker` to `prettier` + `prettier/unicorn`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-prettier.md)

### eslint-plugin-eslint-comments

- [compare `fisker` to `eslint-comments/recommended`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-eslint-comments.md)

### eslint-plugin-promise

- [compare `fisker` to `promise/recommended`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-promise.md)

### eslint-plugin-unicorn

- [compare `fisker` to `unicorn/recommended`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-unicorn.md)

### eslint-plugin-import

- [compare `fisker` to `import/error` + `import/warning`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-import.md)

### eslint-plugin-vue

- [compare `fisker/vue` to `vue/recommended`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-vue-vue.md)
- [compare `fisker/vue` to `vue/recommended` + `vue/no-layout-rules` + `prettier` + `prettier/vue`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-vue-vue-prettier.md)

## Todos

- [x] airbnb config
- [x] prettier plugin
- [x] unicorn plugin
- [x] es plugin
- [x] vue plugin
- [x] promise plugin
- [ ] react plugin
- [x] node plugin
- [x] html plugin
- [ ] webpack plugin (need evaluate)
- [x] eslint-comments plugin
- [x] jest plugin
- [x] mocha plugin
- [x] jasmine plugin

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [eslint-plugin-es](https://github.com/mysticatea/eslint-plugin-es)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)
- [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)
