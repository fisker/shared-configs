# eslint-config-fisker

[![devDependencies](https://img.shields.io/david/dev/fisker/eslint-config-fisker.svg?style=flat-square)](https://david-dm.org/fisker/eslint-config-fisker)
[![Issues](http://img.shields.io/github/issues/fisker/eslint-config-fisker.svg?style=flat-square)](https://github.com/fisker/eslint-config-fisker/issues)
[![Issues](https://img.shields.io/github/issues-pr/fisker/eslint-config-fisker.svg?style=flat-square)](https://github.com/fisker/eslint-config-fisker/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/fisker/eslint-config-fisker.svg?style=flat-square)](https://github.com/fisker/eslint-config-fisker/commits)
[![GitHub Release Date](https://img.shields.io/github/release-date/fisker/eslint-config-fisker.svg?style=flat-square)](https://github.com/fisker/eslint-config-fisker/releases)

[![npm](https://img.shields.io/npm/v/eslint-config-fisker.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-fisker)
[![npm](https://img.shields.io/npm/dt/eslint-config-fisker.svg?style=flat-square)](https://www.npmtrends.com/eslint-config-fiske)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/eslint-config-fisker.svg?style=flat-square)](https://snyk.io/vuln/npm:eslint-config-fisker)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT license](https://img.shields.io/github/license/fisker/eslint-config-fisker.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> fisker's Shareable ESLint Configuration

## Install

```sh
# with yarn
yarn add --dev eslint prettier eslint-config-fisker

# with npm
npm install --save-dev eslint prettier eslint-config-fisker
```

## .eslintrc.js

### default

```js
module.exports = {
  root: true,
  extends: ['fisker'],
}
```

### es5

```js
module.exports = {
  root: true,
  extends: ['fisker/legacy'],
}
```

- [difference with `default`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-fisker-legacy.md)

### vue

```js
module.exports = {
  root: true,
  extends: ['fisker/vue'],
}
```

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

### eslint-plugin-vue

- [compare `fisker/vue` to `vue/recommended`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-vue-vue.md)
- [compare `fisker/vue` to `vue/recommended` + `vue/no-layout-rules` + `prettier` + `prettier/vue`](https://github.com/fisker/eslint-config-fisker/tree/master/docs/compare-vue-vue-prettier.md)

## Todos

- [x] airbnb config
- [x] prettier plugin
- [x] vue plugin
- [x] promise plugin
- [ ] react plugin
- [ ] node plugin (need evaluate)
- [ ] webpack plugin (need evaluate)
- [x] unicorn plugin
- [x] eslint-comments plugin
- [ ] write documents explain rules
- [ ] test

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)
