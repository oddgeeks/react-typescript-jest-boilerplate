/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  roots: ['<rootDir>'],
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/utils/svgTransform.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'node',
};
