module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jquery: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'func-names': 0,
  },
};
