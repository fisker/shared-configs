// presets: https://github.com/renovatebot/presets
// options: https://renovatebot.com/docs/configuration-options/

module.exports = {
  default: {
    description: 'Default base configuration',
    extends: [
      ':enableRenovate',
      ':ignoreModulesAndTests',
      ':preserveSemverRanges',
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
      ':maintainLockFilesWeekly',
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
    devDependencies: {
      automerge: true,
    },
    vulnerabilityAlerts: {
      labels: ['security'],
      assignees: ['@fisker'],
    },
    schedule: ['after 5:30pm and before 5:30am'],
  },
}
