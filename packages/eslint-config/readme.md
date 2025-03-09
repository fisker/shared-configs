# @fisker/eslint-config

> fisker's Shareable ESLint Configuration

## Install

```sh
yarn add --dev eslint prettier @fisker/eslint-config
```

## .eslintrc.js

```js
import fiskerEslintConfig from '@fisker/eslint-config'

export default [...fiskerEslintConfig]
```

## Todos

- [x] airbnb config
- [x] prettier plugin
- [x] unicorn plugin
- [x] promise plugin
- [x] node plugin
- [x] html plugin
- [x] eslint-comments plugin
- [x] ~optimize-regex plugin~ removed in favor of `unicorn/regex-shorthand`
- [ ] react plugin
- [ ] webpack plugin (need evaluate)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)
