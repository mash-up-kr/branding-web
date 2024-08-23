import { fonts, colors, globalZIndex, animation } from 'theme';

import { breakPoint } from './breakPoint';
import { zIndex } from './zIndex';

export const theme = {
  fonts,
  colors,
  globalZIndex,
  zIndex,
  breakPoint,
  animation,
} as const;

export type ThemeType = typeof theme;
