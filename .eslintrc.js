module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './jsconfig.json',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'import/no-unresolved': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
