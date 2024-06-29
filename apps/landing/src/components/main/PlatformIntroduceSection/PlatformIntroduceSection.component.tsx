import { Lottie } from 'ui';

import { PLATFORM_INTRODUCE, PLATFORM_RADIO_ITEMS } from '@/constants';

import * as Styled from './PlatformIntroduceSection.styled';

const PlatformIntroduceSection = () => (
  <Styled.PlatformIntroduceSection>
    <Styled.PlatformIntroduceLayout>
      <Styled.Title>
        <span>WE’RE</span>
        <Styled.GradientText>MASH-UP</Styled.GradientText>
      </Styled.Title>
      <Styled.Description>
        {
          '지식과 정보가 넘쳐나고 서로에게 새로운 도전을 시도할 수 있게\n큰 힘이 되어주는 멋진 매쉬업 팀들을 소개해드릴게요.'
        }
      </Styled.Description>
    </Styled.PlatformIntroduceLayout>

    <Styled.PlatformSlideLayout>
      <Styled.PlatformList>
        {PLATFORM_RADIO_ITEMS.map(({ displayName, name }) => (
          <Styled.Platform key={name}>{displayName}</Styled.Platform>
        ))}
      </Styled.PlatformList>

      <Styled.IntroduceSlide>
        {PLATFORM_INTRODUCE.productDesign.map(
          ({ type, description, imageUrl, lottieData }, index) =>
            type === 'text' ? (
              <Styled.IntroduceTextCard key={`introduce-text-card-${index}`}>
                <p>{description}</p>
                <Styled.LottieWrapper>
                  <Lottie animationData={lottieData} />
                </Styled.LottieWrapper>
              </Styled.IntroduceTextCard>
            ) : (
              <Styled.IntroduceImageCard
                backgroundUrl={imageUrl ?? ''}
                key={`introduce-text-card-${index}`}
              />
            ),
        )}
      </Styled.IntroduceSlide>
    </Styled.PlatformSlideLayout>
  </Styled.PlatformIntroduceSection>
);

export default PlatformIntroduceSection;
