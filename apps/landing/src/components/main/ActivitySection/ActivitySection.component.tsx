import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { ActivityItem } from '@/components/main';

import * as Styled from './ActivitySection.styled';

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

        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '4.8rem', left: '0' }}
        />
        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '26.3rem', right: '0' }}
        />
        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '69.3rem', left: '18.6rem' }}
        />
        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '133.8rem', right: '18.5rem' }}
        />
        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '188.8rem', left: '0' }}
        />
        <ActivityItem
          title="오프라인 세미나"
          description="한달에 한번 오프라인으로 모여 세미나와 활동내역을
공유하는 시간을 가져요"
          thumbnailUrl="https://mash-up.kr/_next/static/images/team_1-50dc28b72cf8ffc665ab381fa9f98320.jpg"
          position={{ top: '219.8rem', right: '0' }}
        />
      </Styled.ActivitySectionWrapper>
    </Styled.ActivitySection>
  );
});
ActivitySection.displayName = 'ActivitySection';

export default ActivitySection;
