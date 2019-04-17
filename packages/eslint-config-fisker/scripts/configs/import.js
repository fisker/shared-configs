export default {
  name: 'import/error + import/warning',
  config: {
    plugins: ['import'],
    extends: ['plugin:import/errors', 'plugin:import/warnings'],
  },
}
