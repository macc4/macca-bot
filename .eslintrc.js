module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'warn', // should be 'error'
    '@typescript-eslint/explicit-function-return-type': 'off', // should be 'error'
    '@typescript-eslint/explicit-module-boundary-types': 'off', // should be 'error'
    '@typescript-eslint/no-explicit-any': 'off', // should be 'error'
    'no-return-await': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'error',
    curly: 'error',
  },
};
