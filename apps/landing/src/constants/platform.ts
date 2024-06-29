import { KeyOf, ValueOf } from 'types';

import designLottie1 from '@/assets/lottie/platformIntroduce/design/design-1.json';
import designLottie2 from '@/assets/lottie/platformIntroduce/design/design-2.json';
import designLottie3 from '@/assets/lottie/platformIntroduce/design/design-3.json';
import designLottie4 from '@/assets/lottie/platformIntroduce/design/design-4.json';

const PLATFORM = {
  productDesign: 'Product Design',
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  spring: 'Spring',
  node: 'Node',
  branding: 'Branding',
} as const;

type TPlatformName = KeyOf<typeof PLATFORM>;
type TPlatformDisplayName = ValueOf<typeof PLATFORM>;

export const PLATFORM_RADIO_ITEMS: Array<{
  name: TPlatformName;
  displayName: TPlatformDisplayName;
}> = [
  { name: 'productDesign', displayName: 'Product Design' },
  { name: 'ios', displayName: 'iOS' },
  { name: 'android', displayName: 'Android' },
  { name: 'web', displayName: 'Web' },
  { name: 'spring', displayName: 'Spring' },
  { name: 'node', displayName: 'Node' },
  { name: 'branding', displayName: 'Branding' },
] as const;

interface PlatformIntroduceCard {
  type: 'text' | 'image';
  description?: string;
  lottieData?: any;
  imageUrl?: string;
}

export const PLATFORM_INTRODUCE: Record<TPlatformName, Array<PlatformIntroduceCard>> = {
  productDesign: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: designLottie1,
    },
    {
      type: 'text',
      description: 'Product Design 팀은\n서비스의 경험을\n설계하고 문제를\n해결해요.',
      lottieData: designLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/design-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description:
        '프로젝트 전체를\n이해하고 개발자들과\n적극적으로 소통하며\n더 좋은 서비스 방향을\n고민해요.',
      lottieData: designLottie4,
    },
    {
      type: 'text',
      description:
        '다양한 경험을 가진\n사람들과 디자인 지식과\n트렌드를 공유하며\n성장해 나가는 것을\n추구하고 있어요.',
      lottieData: designLottie3,
    },
  ],
  ios: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
  android: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
  web: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
  spring: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
  node: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
  branding: [
    {
      type: 'text',
      description:
        '서비스 기획부터\n인터페이스, 브랜딩,\n프로토타이핑까지\n모든 디자인을 유연하게\n설계해요.',
      lottieData: '',
      imageUrl: '',
    },
  ],
} as const;
