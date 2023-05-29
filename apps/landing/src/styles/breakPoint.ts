// max-width 기준
const BREAK_POINT = {
  mobile: 767,
  tablet: 1023,
  notebook: 1439,
  // 1440px부터 Desktop
};

export const breakPoint = {
  value: {
    mobile: BREAK_POINT.mobile,
    tablet: BREAK_POINT.tablet,
    notebook: BREAK_POINT.notebook,
  },
  media: {
    mobile: `${BREAK_POINT.mobile}px`,
    tablet: `${BREAK_POINT.tablet}px`,
    notebook: `${BREAK_POINT.notebook}px`,
  },
} as const;
