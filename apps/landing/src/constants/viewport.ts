import { ValueOf } from 'types';

export const VIEWPORT_SIZE = {
  MOBILE: 'MOBILE',
  TABLET_S: 'TABLET_S',
  TABLET_L: 'TABLET_L',
  DESKTOP: 'DESKTOP',
} as const;

export type TViewPortSize = ValueOf<typeof VIEWPORT_SIZE>;
