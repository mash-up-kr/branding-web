import { fonts, colors, globalZIndex } from 'theme';

import { breakPoint } from './breakPoint';
import { zIndex } from './zIndex';

export const theme = {
  fonts,
  colors,
  globalZIndex,
  zIndex,
  breakPoint,
} as const;

export type ThemeType = typeof theme;
