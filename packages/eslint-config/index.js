import {importPreferLocal, importFile} from './utilities/utilities.js'
import configAirbnb from './airbnb/index.js'
import pluginPromise from './plugins/promise.js'
import pluginNode from './plugins/node.js'
import pluginUnicorn from './plugins/unicorn.js'
import pluginEslintComments from './plugins/eslint-comments.js'
import pluginRegexp from './plugins/regexp.js'
import pluginSonarjs from './plugins/sonarjs.js'
import pluginSortClassMember from './plugins/sort-class-members.js'
import configPrettier from './plugins/prettier.js'

const {default: babelEslintParser} = await importPreferLocal(
  '@babel/eslint-parser',
)
const {default: eslintPluginJs} = await importPreferLocal('@eslint/js')
const eslintrc = await importPreferLocal('@eslint/eslintrc')

export default [
  // ESLint recommended
  eslintPluginJs.configs.recommended,

  // plugins
  ...pluginPromise,
  ...pluginNode,
  ...pluginUnicorn,
  ...pluginEslintComments,
  ...pluginRegexp,
  ...pluginSonarjs,
  ...pluginSortClassMember,

  // airbnb
  ...configAirbnb,

  // Prettier
  ...configPrettier,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelEslintParser,
      globals: {
        ...eslintrc.Legacy.environments.get('es2024').globals,
        ...eslintrc.Legacy.environments.get('browser').globals,
        ...eslintrc.Legacy.environments.get('node').globals,
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
]
