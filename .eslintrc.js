module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'eslint:recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react', 'import',
  ],
  'rules': {
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'error',
    'no-undef': 'warn',
    'linebreak-style': 'off',
  },
};
