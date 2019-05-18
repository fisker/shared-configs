// presets: https://github.com/renovatebot/presets
// options: https://renovatebot.com/docs/configuration-options/

export default {
  description: 'Default Configuration',
  extends: [
    ':enableRenovate',
    ':ignoreModulesAndTests',
    // ':preserveSemverRanges',
    ':separateMajorReleases',
    ':combinePatchMinorReleases',
    ':renovatePrefix',
    ':semanticPrefixChore',
    ':disablePeerDependencies',
    ':disableDigestUpdates',
    ':semanticPrefixFixDepsChoreOthers',
    ':rebaseStalePrs',
    ':unpublishSafe',
    ':prImmediately',
    ':prHourlyLimitNone',
    ':disableRateLimiting',
    ':automergeRequireAllStatusChecks',
    ':maintainLockFilesDisabled',
    ':ignoreUnstable',
    ':respectLatest',
    ':updateNotScheduled',
    ':npm',
    ':automergeLinters',
    ':doNotPinPackage',
    ':semanticCommits',
    ':timezone(Asia/Shanghai)',
    ':automergePatch',
  ],
  ignorePresets: [],
  packageRules: [
    {
      depTypeList: ['devDependencies'],
      automerge: true,
    },
  ],
  vulnerabilityAlerts: {
    labels: ['security'],
    assignees: ['@fisker'],
  },
  // schedule: ['after 5:30pm and before 5:30am'],
}
