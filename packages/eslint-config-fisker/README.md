# eslint-config

[![Greenkeeper badge](https://badges.greenkeeper.io/xwtec/eslint-config.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![npm](https://img.shields.io/npm/dt/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![npm](https://img.shields.io/npm/dm/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)

## install

```sh
yarn add --dev eslint prettier @xwtec/eslint-config
```

globally install

```sh
npm install --global eslint prettier @xwtec/eslint-config
```

## .eslintrc.js

### default

```js
module.exports = {
  root: true,
  extends: ['@xwtec'],
}
```

### es5

```js
module.exports = {
  root: true,
  extends: ['@xwtec/eslint-config/legacy'],
}
```

### vue

```js
module.exports = {
  root: true,
  extends: ['@xwtec/eslint-config/vue'],
}
```

## lint

```sh
npx eslint **/*.js --quiet
```

## links

- [eslint](https://eslint.org/)

- [prettier](https://prettier.io/)

- [recommended config](https://github.com/xwtec/dotfiles)

## todo

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

## changelog

[changelog](CHANGELOG.md)
