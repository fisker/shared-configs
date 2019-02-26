// presets: https://github.com/renovatebot/presets

module.exports = {
  default: {
    extends: [
      'config:base',
      ':preserveSemverRanges',
      ':automergeRequireAllStatusChecks',
      ':automergePatch',
      ':disablePeerDependencies',
      ':timezone(Asia/Shanghai)',
    ],
    lockFileMaintenance: {
      enabled: true,
      automerge: true,
    },
  },
}
