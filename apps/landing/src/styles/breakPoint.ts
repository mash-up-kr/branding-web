// max-width 기준
const BREAK_POINT = {
  mobile: 576,
  tabletS: 767,
  tabletL: 1023,
  notebook: 1439,
  // 1440px부터 Desktop
};

export const breakPoint = {
  value: {
    mobile: BREAK_POINT.mobile,
    tabletS: BREAK_POINT.tabletS,
    tabletL: BREAK_POINT.tabletL,
    notebook: BREAK_POINT.notebook,
  },
  media: {
    mobile: `${BREAK_POINT.mobile}px`,
    tabletS: `${BREAK_POINT.tabletS}px`,
    tabletL: `${BREAK_POINT.tabletL}px`,
    notebook: `${BREAK_POINT.notebook}px`,
  },
} as const;
