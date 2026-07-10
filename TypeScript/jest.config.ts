import { readFileSync } from 'node:fs';
import { pathsToModuleNameMapper } from "ts-jest";

const { compilerOptions } = JSON.parse(readFileSync('./tsconfig.json', 'utf-8'));

export default {
  roots: ['<rootDir>/app', '<rootDir>/test/jest'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' } ),
};
