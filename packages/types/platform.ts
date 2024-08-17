import { PLATFORM_NAME_MAP, PLATFORM } from 'constant';

import { ValueOf } from './helper';

export type PlatformNameKey = keyof typeof PLATFORM_NAME_MAP;
export type PlatformNameValue = ValueOf<typeof PLATFORM_NAME_MAP>;
export type TPlatform = keyof typeof PLATFORM;
export type TPlatformDisplayName = ValueOf<typeof PLATFORM>;
