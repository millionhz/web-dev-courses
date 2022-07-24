module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jquery: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-await-in-loop': 'off',
  },
};
