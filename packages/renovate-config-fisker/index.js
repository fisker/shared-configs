// presets: https://github.com/renovatebot/presets
// options: https://renovatebot.com/docs/configuration-options/

module.exports = {
  default: {
    extends: [
      'config:base',
      ':preserveSemverRanges',
      ':automergeRequireAllStatusChecks',
      ':automergePatch',
      ':disablePeerDependencies',
      ':timezone(Asia/Shanghai)',
      ':npm',
    ],
    lockFileMaintenance: {
      enabled: true,
      automerge: true,
      schedule: 'before 8am on Monday',
    },
    schedule: ['before 8am'],
    devDependencies: {
      automerge: true,
    },
  },
}
