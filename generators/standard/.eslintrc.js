module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['vue-impression', 'prettier'],

  plugins: ['html'],

  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.config.base.js'
      }
    }
  },

  globals: {
    __DEV__: false,
    fetch: false,
    wx: false,
    AMap: false
  },

  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }
    ],
    'newline-after-var': 'off',
    'import/imports-first': 'off',
    'no-unused-vars': 1,
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }]
  }
}
