module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{vue,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/modules/**',
    '!**/coverage/**',
    '!**/test/**',
    '!**/jest/**',
    '!**/static/**',
    '!**/functions/**',
    '!**/*.config.*',
    '!**/_nuxt/**',
  ],
  verbose: false,
  projects: [{
    testURL: 'http://localhost',
    displayName: 'test',
    moduleFileExtensions: [
      'js',
      'vue',
    ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
    },
    moduleNameMapper: {
      '@/(.*)$': '<rootDir>/$1',
    },
    snapshotSerializers: [
      '<rootDir>/config/htmlSnapShotBeautifier.js',
    ],
  },
  {
    testURL: 'http://localhost',
    runner: 'jest-runner-eslint',
    displayName: 'lint',
    testMatch: ['<rootDir>/test/**/*.js'],
  },
  ],
};
