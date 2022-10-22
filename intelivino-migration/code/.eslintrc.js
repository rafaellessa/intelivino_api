module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript', 
    'standard',
    'plugin:sonar/base',
    'plugin:sonar/recommended',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-useless-constructor': 'off',
    'array-callback-return': 'off',
    'no-undef': 'off',
    'n/no-path-concat': 'off',
    'no-use-before-define': 'off',
    'n/no-callback-literal': 'off'
  }
}
