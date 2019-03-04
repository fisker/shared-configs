# @xwtec/eslint-config

[![devDependencies](https://img.shields.io/david/dev/xwtec/eslint-config.svg?style=flat-square)](https://david-dm.org/xwtec/eslint-config)
[![Issues](http://img.shields.io/github/issues/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/issues)
[![Issues](https://img.shields.io/github/issues-pr/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/commits)
[![GitHub Release Date](https://img.shields.io/github/release-date/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/releases)

[![npm](https://img.shields.io/npm/v/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![npm](https://img.shields.io/npm/dt/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/@xwtec/eslint-config.svg?style=flat-square)](https://snyk.io/vuln/npm:@xwtec%2Feslint-config)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT license](https://img.shields.io/github/license/xwtec/eslint-config.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> ESLint config for xwtec projects

## Install

```sh
# with yarn
yarn add --dev eslint prettier @xwtec/eslint-config

# with npm
npm install --save-dev eslint prettier @xwtec/eslint-config
```

## .eslintrc.js

### default

```js
module.exports = {
  root: true,
  extends: ["@xwtec"],
}
```

### es5

```js
module.exports = {
  root: true,
  extends: ["@xwtec/eslint-config/legacy"],
}
```

### vue

```js
module.exports = {
  root: true,
  extends: ["@xwtec/eslint-config/vue"],
}
```

## Usage

```sh
npx eslint **/*.js
```

## Todos

- [x] airbnb config
- [x] prettier plugin
- [x] vue plugin
- [x] promise plugin
- [ ] react plugin
- [ ] node plugin (need evaluate)
- [ ] webpack plugin (need evaluate)
- [x] unicorn plugin
- [ ] write documents explain rules
- [ ] test

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## Changelog

[changelog.md](https://github.com/xwtec/eslint-config/blob/master/changelog.md)

## License

MIT © [xwtec](https://github.com/xwtec)
