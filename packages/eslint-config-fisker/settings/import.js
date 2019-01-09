module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    },
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx']
  }
}