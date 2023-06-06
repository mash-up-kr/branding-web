import { fonts, colors, globalZIndex } from 'theme';
import { zIndex } from './zIndex';
import { breakPoint } from './breakPoint';

export const theme = {
  fonts,
  colors,
  globalZIndex,
  zIndex,
  breakPoint,
} as const;

export type ThemeType = typeof theme;
