module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    semi: [2, 'never'],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'e',
          'el',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'widget',
          'init',
        ],
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
