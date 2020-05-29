module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  setupFilesAfterEnv: ['<rootDir>/test/config/setup.ts'],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'packages/**/src/**/*.{tsx,ts,jsx,js}',
    '!packages/**/src/**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
