import globals from 'globals'
import eslintPluginJs from '@eslint/js'
import babelEslintParser from '@babel/eslint-parser'
import configAirbnb from './airbnb/index.js'
import pluginPromise from './plugins/promise.js'
import pluginNode from './plugins/node.js'
import pluginUnicorn from './plugins/unicorn.js'
import pluginEslintComments from './plugins/eslint-comments.js'
import pluginRegexp from './plugins/regexp.js'
import pluginSonarjs from './plugins/sonarjs.js'
import pluginSortClassMember from './plugins/sort-class-members.js'
import configPrettier from './plugins/prettier.js'
import ignores from './ignores/index.js'

export default [
  // ESLint recommended
  eslintPluginJs.configs.recommended,

  // plugins
  pluginPromise,
  pluginNode,
  pluginUnicorn,
  pluginEslintComments,
  pluginRegexp,
  pluginSonarjs,
  pluginSortClassMember,

  // airbnb
  configAirbnb,

  // Prettier
  configPrettier,

  ignores,

  {
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
      curly: ['error', 'all'],

      // should not set by `eslint-plugin-node`,
      // and also there is a option by `eslint-config-unicorn`
      'no-process-exit': 'off',

      // conflicts with `unicorn/prevent-abbreviations` auto fixing
      'no-underscore-dangle': 'off',

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],

      'n/no-unsupported-features/node-builtins': 'off',

      'n/no-missing-import': 'off',

      'unicorn/template-indent': 'error',
    },
  },
].flat()
