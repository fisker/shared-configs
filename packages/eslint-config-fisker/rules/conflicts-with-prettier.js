module.exports = {
  rules: {
    // iife style inside
    'wrap-iife': ['error', 'inside'],
    // no space before function parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    // operator linebreak
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore'
        }
      }
    ],
    // no space in object
    'object-curly-spacing': [
      'error',
      'never'
    ],
    // warn indent
    indent: 'warn'
  }
}