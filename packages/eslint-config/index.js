import babelEslintParser from '@babel/eslint-parser'
import globals from 'globals'
import ignores from './ignores/index.js'
import builtinRules from './plugins/builtin-rules.js'
import pluginEslintComments from './plugins/eslint-comments.js'
import pluginNode from './plugins/node.js'
import configPrettier from './plugins/prettier.js'
import pluginPromise from './plugins/promise.js'
import pluginRegexp from './plugins/regexp.js'
import pluginSimpleImportSort from './plugins/simple-import-sort.js'
import pluginSonarjs from './plugins/sonarjs.js'
import pluginSortClassMember from './plugins/sort-class-members.js'
import pluginStylistic from './plugins/stylistic.js'
import pluginUnicorn from './plugins/unicorn.js'

export default [
  // ESLint recommended
  builtinRules,

  // Plugins
  pluginPromise,
  pluginNode,
  pluginUnicorn,
  pluginEslintComments,
  pluginRegexp,
  pluginSonarjs,
  pluginSortClassMember,
  pluginSimpleImportSort,
  pluginStylistic,

  // Prettier
  configPrettier,

  ignores,

  {
    name: 'fisker/overrides',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelEslintParser,
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
          globalReturn: false,
        },
        babelOptions: {
          babelrc: false,
          configFile: false,
          parserOpts: {
            plugins: ['jsx'],
          },
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      // Should not set by `eslint-plugin-n`,
      // and also there is a option by `eslint-config-unicorn`
      'no-process-exit': 'off',

      // Conflicts with `unicorn/prevent-abbreviations` auto fixing
      'no-underscore-dangle': 'off',

      'n/no-unsupported-features/node-builtins': 'off',

      'n/no-missing-import': 'off',

      'no-await-in-loop': 'off',
      'no-template-curly-in-string': 'off',
    },
  },
].flat()
