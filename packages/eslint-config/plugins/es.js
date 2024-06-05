import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintPluginEsX} = await importPreferLocal('eslint-plugin-es-x')

export default [
  {
    plugins: {'es-x': eslintPluginEsX},
    rules: {
      // Lookbehind assertions cannot be transpiled
      // https://github.com/babel/babel/issues/11086#issuecomment-581157679
      'es-x/no-regexp-lookbehind-assertions': 'error',
    },
  },
]
