import postcssPresetEnvironment from 'postcss-preset-env'

const postcssPresetEnvironmentPlugin = postcssPresetEnvironment({
  stage: 0,
  features: {
    'system-ui-font-family': false,
  },
})

const config = {
  plugins: [postcssPresetEnvironmentPlugin],
}

export default config
