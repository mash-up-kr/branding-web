import { fonts, colors } from 'theme';
import { zIndex } from './zIndex';
import { breakPoint } from './breakPoint';

export const theme = {
  fonts,
  colors,
  zIndex,
  breakPoint,
} as const;

export type ThemeType = typeof theme;
