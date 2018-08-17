module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  plugins: [ 'html', 'promise', 'react', 'jsx' ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'space-before-function-paren': 'off',
    'no-useless-escape': 'off',
    // 'no-unused-vars': 'off',
    'no-throw-literal': 'off',
    'linebreak-style': 'off',
    'no-useless-call': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'standard/no-callback-literal': 'off'
  }
};