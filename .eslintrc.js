module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'error',
    'react/no-this-in-sfc': 'error', //Report "this" being used in stateless components
    'react/no-unused-state': 'error', //Prevent definition of unused state fields
    'react/destructuring-assignment': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 0,
    'no-console': 1,
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
