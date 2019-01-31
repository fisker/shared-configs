# eslint-config

## install

```sh
yarn add eslint prettier @xwtec/eslint-config
```

globally install

```sh
npm install --global eslint prettier @xwtec/eslint-config
```

## eslint config

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
