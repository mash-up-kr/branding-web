module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'next', 'turbo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'no-throw-literal': 'off',
    'no-nested-ternary': 'off',
  },
};
