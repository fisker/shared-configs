import postcssPresetEnvironment from 'postcss-preset-env'

const postcssPresetEnvironmentPlugin = postcssPresetEnvironment({stage: 0})

export default {
  plugins: [postcssPresetEnvironmentPlugin],
}
