import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/.eslintrc.js',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/__mocks__/**',
    '!<rootDir>/stubs/**',
  ],
  coverageReporters: ['text', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true,
    NODE_ENV: 'test',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/__mocks__/setup.mock.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
};

export default createJestConfig(config);
