import { KeyOf } from 'types';

export const PLATFORM = {
  DESIGN: 'DESIGN',
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  NODE: 'NODE',
  SPRING: 'SPRING',
} as const;

export type TPlatform = KeyOf<typeof PLATFORM>;

export const PLATFORM_NAME_MAP = {
  DESIGN: 'Product Design',
  WEB: 'Web',
  ANDROID: 'Android',
  IOS: 'iOS',
  NODE: 'Node',
  SPRING: 'Spring',
} as const;
