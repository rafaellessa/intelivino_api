/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { resolve } = require('path')
const { name } = require('./package.json')
const root = resolve(__dirname)
module.exports = {
  rootDir: root,
  displayName: name,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '#/(.*)': '<rootDir>/src/$1',
  },
}
