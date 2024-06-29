import { KeyOf, ValueOf } from 'types';

import androidLottie1 from '@/assets/lottie/platformIntroduce/android/android-1.json';
import androidLottie2 from '@/assets/lottie/platformIntroduce/android/android-2.json';
import androidLottie3 from '@/assets/lottie/platformIntroduce/android/android-3.json';
import androidLottie4 from '@/assets/lottie/platformIntroduce/android/android-4.json';
import brandingLottie1 from '@/assets/lottie/platformIntroduce/branding/branding-1.json';
import brandingLottie2 from '@/assets/lottie/platformIntroduce/branding/branding-2.json';
import brandingLottie3 from '@/assets/lottie/platformIntroduce/branding/branding-3.json';
import brandingLottie4 from '@/assets/lottie/platformIntroduce/branding/branding-4.json';
import designLottie1 from '@/assets/lottie/platformIntroduce/design/design-1.json';
import designLottie2 from '@/assets/lottie/platformIntroduce/design/design-2.json';
import designLottie3 from '@/assets/lottie/platformIntroduce/design/design-3.json';
import designLottie4 from '@/assets/lottie/platformIntroduce/design/design-4.json';
import iosLottie1 from '@/assets/lottie/platformIntroduce/ios/ios-1.json';
import iosLottie2 from '@/assets/lottie/platformIntroduce/ios/ios-2.json';
import iosLottie3 from '@/assets/lottie/platformIntroduce/ios/ios-3.json';
import iosLottie4 from '@/assets/lottie/platformIntroduce/ios/ios-4.json';
import nodeLottie1 from '@/assets/lottie/platformIntroduce/node/node-1.json';
import nodeLottie2 from '@/assets/lottie/platformIntroduce/node/node-2.json';
import nodeLottie3 from '@/assets/lottie/platformIntroduce/node/node-3.json';
import nodeLottie4 from '@/assets/lottie/platformIntroduce/node/node-4.json';
import springLottie1 from '@/assets/lottie/platformIntroduce/spring/spring-1.json';
import springLottie2 from '@/assets/lottie/platformIntroduce/spring/spring-2.json';
import springLottie3 from '@/assets/lottie/platformIntroduce/spring/spring-3.json';
import springLottie4 from '@/assets/lottie/platformIntroduce/spring/spring-4.json';
import webLottie1 from '@/assets/lottie/platformIntroduce/web/web-1.json';
import webLottie2 from '@/assets/lottie/platformIntroduce/web/web-2.json';
import webLottie3 from '@/assets/lottie/platformIntroduce/web/web-3.json';
import webLottie4 from '@/assets/lottie/platformIntroduce/web/web-4.json';

const PLATFORM = {
  productDesign: 'Product Design',
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  spring: 'Spring',
  node: 'Node',
  branding: 'Branding',
} as const;

export type TPlatformName = KeyOf<typeof PLATFORM>;
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
      description: '정보와 지식을\n공유하며 성장하는\n네트워크를\n형성하는 것이\n목표에요.',
      lottieData: iosLottie1,
    },
    {
      type: 'text',
      description: 'iOS 팀은\n새로운 기술과\n새로운 제품을 참지\n못하시는 사람들이\n모여있어요.',
      lottieData: iosLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/ios-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description:
        'iOS 팀은\n다른 사람들과 활발하게\n개발 이야기를 나누고\n애플에 관심이\n많은 사람들이에요.',
      lottieData: iosLottie3,
    },
    {
      type: 'text',
      description: 'iOS에 열정 넘치고\n애플 아니면 안되는\n앱등이면\n바로 지원하세요.',
      lottieData: iosLottie4,
    },
  ],
  android: [
    {
      type: 'text',
      description:
        '다양한 사람들이 모여\n좋은 지식을 다 같이\n공유하고 성장하며\n서로에게 자극이 되는\n관계를 지향해요.',
      lottieData: androidLottie1,
    },
    {
      type: 'text',
      description:
        'Android 개발이라는\n같은 공통사를 가진\n좋은 사람들과\n만날 수 있는 친목의 장을\n형성해요.',
      lottieData: androidLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/android-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description:
        '기술적으로 풀기\n어려운 문제를 공유해\n함께 토론하고\n해결해보기 위해\n노력해요.',
      lottieData: androidLottie3,
    },
    {
      type: 'text',
      description:
        '스터디, 세미나,\n코드리뷰 등 팀 활동에\n적극적으로 참여하며\n성장을 위해 활발히\n활동해요.',
      lottieData: androidLottie4,
    },
  ],
  web: [
    {
      type: 'text',
      description: 'Web 팀은\n웹 생태계에 관심이 많고,\nJavascript에\n진심인 사람들이\n모여있어요.',
      lottieData: webLottie1,
    },
    {
      type: 'text',
      description:
        '함께 고민하고,\n나만 알기 아까운\n인사이트를 공유하며\n서로에게 좋은 영향력을\n행사하고 있어요.',
      lottieData: webLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/web-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description:
        '할 땐 확실히 하지만\n놀 때도 누구보다\n확실히 놀며 좋은 동료이자\n든든한 친구가 되는\n관계를 지향해요.',
      lottieData: webLottie3,
    },
    {
      type: 'text',
      description:
        'React를 주로 활용하지만,\n써보고 싶었던 또는\n궁금했던 기술을 팀원들과의\n협의 하에 자유롭게\n시도할 수 있어요.',
      lottieData: webLottie4,
    },
  ],
  spring: [
    {
      type: 'text',
      description:
        'Spring 팀은\n개발에 대한 열정을 통해\n개발 지식을 공유하고\n함께 고민하면서,\n공동의 기술적 성장을\n목표로 해요.',
      lottieData: springLottie1,
    },
    {
      type: 'text',
      description:
        '개발 열정을 프로젝트,\n세미나, 스터디를 통해\n실제로 행동에 옮기면서\n개발자로서의 성장을\n추구하고 있어요!',
      lottieData: springLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/spring-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description:
        '개발 뿐 아니라,\n놀 때도 최선을 다해\n재미까지 챙기며\n열정적인 에너지로\n활동해요.',
      lottieData: springLottie3,
    },
    {
      type: 'text',
      description:
        '개발 뿐 아니라,\n놀 때도 최선을 다해\n재미까지 챙기며\n열정적인 에너지로\n활동해요.',
      lottieData: springLottie4,
    },
  ],
  node: [
    {
      type: 'text',
      description:
        'Node 팀은\n다양한 사람들과\n다양한 경험을 하며\n어디서나 필요로 하는\n인재가 되는 것을\n지향해요.',
      lottieData: nodeLottie1,
    },
    {
      type: 'text',
      description: '서로의 성장과 재미,\n두 마리 토끼를\n모두 잡는 것이\nNode팀의 목표에요.',
      lottieData: nodeLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/node-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description: '모르는 것을\n모른다 말하고\n알려고 노력하는\n지적 솔직함을\n지향해요.',
      lottieData: nodeLottie3,
    },
    {
      type: 'text',
      description:
        '기술 얘기하는 걸\n좋아하는 코딩 덕후와\nDeep-Dive를\n좋아하는 사람이면\n환영해요.',
      lottieData: nodeLottie4,
    },
  ],
  branding: [
    {
      type: 'text',
      description:
        'Branding 팀은\n매쉬업이라는 브랜드를\n고도화하기 위해\n서비스를 구축하는\n팀이에요.',
      lottieData: brandingLottie1,
    },
    {
      type: 'text',
      description:
        '매쉬업의 랜딩 페이지,\n리크루팅 페이지, 출첵앱,\n어드민 페이지를\n모두 책임지고\n관리하고 있어요.',
      lottieData: brandingLottie2,
    },
    {
      type: 'image',
      // TODO: develop과 merge 후 상수화하여 사용
      imageUrl:
        'https://static.mash-up.kr/images/jpg/landing/platform-introduce/branding-introduce-thumbnail-3x-min.jpg',
    },
    {
      type: 'text',
      description: 'WORK HARD\nPLAY HARD 팀으로\n기술 성장과 교류,\n재미를 모두 챙겨가고\n있어요!',
      lottieData: brandingLottie3,
    },
    {
      type: 'text',
      description:
        'Branding 팀은\n다른 플랫폼과는 다르게\n기수 끝나기 전에\n동아리 내부에서 합류하실\n분들을 지원받아요!',
      lottieData: brandingLottie4,
    },
  ],
} as const;
