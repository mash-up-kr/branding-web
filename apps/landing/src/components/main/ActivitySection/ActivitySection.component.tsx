import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { ActivityItem } from '@/components/main';

import * as Styled from './ActivitySection.styled';

const ACTIVITY_ITEMS = [
  {
    title: '오프라인 세미나',
    description: '한달에 한번 오프라인으로 모여 세미나와 활동내역을 공유하는 시간을 가져요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-1-3x-min.jpg',
    position: { top: '4.8rem', left: '0' },
  },
  {
    title: '매쉬업 워크샵',
    description: '1박 2일간 모든 매쉬업  플랫폼 팀원들이 모여 서로 가까워지는 시간을 가져요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-2-3x-min.jpg',
    position: { top: '26.3rem', right: '0' },
  },
  {
    title: '홈커밍 데이',
    description: '각 플랫폼에서 종사하는 현직자가 와서 직무와 관련된 세미나를 진행해요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-3-3x-min.jpg',
    position: { top: '69.3rem', left: '18.6rem' },
  },
  {
    title: '해커톤',
    description:
      '플랫폼 해커톤, 팀 해커톤 등 당일 또는 무박 2일로 팀 프로젝트의 완성도를 끌어올려요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-4-3x-min.jpg',
    position: { top: '133.8rem', right: '18.5rem' },
  },
  {
    title: '동아리 안에 작은 동아리',
    description: '운동, 게임, 댄스 등 같은 취미가 있는 사람들끼리 모여 함께 취미를 즐겨요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-5-3x-min.jpg',
    position: { top: '188.8rem', left: '0' },
  },
  {
    title: '다양한 스터디',
    description: '플랫폼별로 성장을 위한 다양한 스터디를 개설하여 함께 성장을 도모해요',
    thumbnailUrl:
      'https://static.mash-up.kr/images/jpg/landing/activity/activity-thumbnail-6-3x-min.jpg',
    position: { top: '219.8rem', right: '0' },
  },
];

const ActivitySection = forwardRef<HTMLElement>((_, ref) => {
  const { ref: activitySectionWrapperRef, inView: isInViewActivitySectionWrapper } = useInView({
    threshold: 0.15,
  });

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
            position={position}
            key={index}
          />
        ))}
      </Styled.ActivitySectionWrapper>
    </Styled.ActivitySection>
  );
});
ActivitySection.displayName = 'ActivitySection';

export default ActivitySection;
