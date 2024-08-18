import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { ActivityItem } from '@/components/main';
import { TViewPortSize } from '@/constants';
import { useDetectViewport } from '@/hooks';

import * as Styled from './ActivitySection.styled';

const ACTIVITY_ITEMS: Array<{
  title: string;
  description: string;
  thumbnailUrl: string;
  position: Record<TViewPortSize, { top?: string; bottom?: string; left?: string; right?: string }>;
}> = [
  {
    title: '오프라인 세미나',
    description: '한달에 한번 오프라인으로 모여 세미나와 활동내역을 공유하는 시간을 가져요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-1-3x-min.jpg',
    position: {
      DESKTOP: { top: '4.8rem', left: '0' },
      NOTEBOOK: { top: '4.8rem', left: '0' },
      TABLET_L: { top: '4.8rem', left: '0' },
      TABLET_S: { top: '4.8rem', left: '0' },
      MOBILE: { top: '4rem', left: '0' },
    },
  },
  {
    title: '매쉬업 워크샵',
    description: '1박 2일간 모든 매쉬업  플랫폼 팀원들이 모여 서로 가까워지는 시간을 가져요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-2-3x-min.jpg',
    position: {
      DESKTOP: { top: '26.3rem', right: '0' },
      NOTEBOOK: { top: '21.7rem', right: '0' },
      TABLET_L: { top: '18.7rem', right: '0' },
      TABLET_S: { top: '43.8rem', right: '0' },
      MOBILE: { top: '46rem', right: '0' },
    },
  },
  {
    title: '홈커밍 데이',
    description: '각 플랫폼에서 종사하는 현직자가 와서 직무와 관련된 세미나를 진행해요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-3-3x-min.jpg',
    position: {
      DESKTOP: { top: '69.3rem', left: '18.6rem' },
      NOTEBOOK: { top: '53.1rem', left: '0' },
      TABLET_L: { top: '54.1rem', left: '0' },
      TABLET_S: { top: '82.8rem', left: '0' },
      MOBILE: { top: '88rem', left: '0' },
    },
  },
  {
    title: '해커톤',
    description:
      '플랫폼 해커톤, 팀 해커톤 등 당일 또는 무박 2일로 팀 프로젝트의 완성도를 끌어올려요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-4-3x-min.jpg',
    position: {
      DESKTOP: { top: '133.8rem', right: '18.5rem' },
      NOTEBOOK: { top: '101.4rem', right: '0' },
      TABLET_L: { top: '85.7rem', right: '0' },
      TABLET_S: { top: '122.1rem', right: '0' },
      MOBILE: { top: '130rem', right: '0' },
    },
  },
  {
    title: '동아리 안에 작은 동아리',
    description: '운동, 게임, 댄스 등 같은 취미가 있는 사람들끼리 모여 함께 취미를 즐겨요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-5-3x-min.jpg',
    position: {
      DESKTOP: { top: '176.8rem', left: '0' },
      NOTEBOOK: { top: '132.8rem', left: '0' },
      TABLET_L: { top: '112.9rem', left: '0' },
      TABLET_S: { top: '161.4rem', left: '0' },
      MOBILE: { top: '172rem', left: '0' },
    },
  },
  {
    title: '다양한 스터디',
    description: '플랫폼별로 성장을 위한 다양한 스터디를 개설하여 함께 성장을 도모해요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-6-3x-min.jpg',
    position: {
      DESKTOP: { top: '219.8rem', right: '0' },
      NOTEBOOK: { top: '164.2rem', right: '0' },
      TABLET_L: { top: '139.9rem', right: '0' },
      TABLET_S: { top: '200.9rem', right: '0' },
      MOBILE: { top: '214rem', right: '0' },
    },
  },
];

const ActivitySection = forwardRef<HTMLElement>((_, ref) => {
  const { ref: activitySectionWrapperRef, inView: isInViewActivitySectionWrapper } = useInView({
    threshold: 0.1,
  });

  const { viewportSize } = useDetectViewport();

  return (
    <Styled.ActivitySection ref={ref}>
      <Styled.ActivitySectionWrapper ref={activitySectionWrapperRef}>
        <Styled.ActivitySectionHeading isInView={isInViewActivitySectionWrapper}>
          <Styled.HeadingFirstLine>MASH-UP</Styled.HeadingFirstLine>
          <Styled.HeadingSecondLine>ACTIVITY</Styled.HeadingSecondLine>

          <Styled.FirstGradientLine />
          <Styled.SecondGradientLine />
        </Styled.ActivitySectionHeading>

        {ACTIVITY_ITEMS.map(({ title, description, thumbnailUrl, position }, index) => (
          <ActivityItem
            title={title}
            description={description}
            thumbnailUrl={thumbnailUrl}
            position={position[viewportSize]}
            key={index}
          />
        ))}
      </Styled.ActivitySectionWrapper>
    </Styled.ActivitySection>
  );
});

ActivitySection.displayName = 'ActivitySection';

export default ActivitySection;
