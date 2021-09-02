module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^__',
        varsIgnorePattern: '^__',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
