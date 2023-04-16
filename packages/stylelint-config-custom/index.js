module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
    'stylelint-config-styled-components',
  ],
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      { ignoreFontFamilies: ['Pretendard', 'Gilroy'] },
    ],
  },
};
