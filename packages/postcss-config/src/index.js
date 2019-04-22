import postcssPresetEnvironment from 'postcss-preset-env'

const postcssPresetEnvironmentPlugin = postcssPresetEnvironment({
  stage: 0,
  features: {
    'system-ui-font-family': false,
  },
})

export default {
  plugins: [postcssPresetEnvironmentPlugin],
}
