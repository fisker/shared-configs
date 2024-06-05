/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

export default {
  // https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'off',

  // allow functions & classes use before define
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      variables: true,
    },
  ],
}
