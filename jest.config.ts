
const config = {
  preset: 'ts-jest',
  testEnvironment: './custom-environment.ts',  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: 
    { "\\.(css|less)$": "<rootDir>/assets/css/__mocks__/styleMock.js" }
  ,
};

export default config;
