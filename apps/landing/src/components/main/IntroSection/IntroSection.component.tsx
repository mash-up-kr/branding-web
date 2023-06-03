import { DefaultLayout } from '@/components/common';
import * as Styled from './IntroSection.styled';

const IntroSection = () => (
  <DefaultLayout>
    <Styled.IntroSection>
      <Styled.MashUp>
        <span>MASH-UP</span>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
      </Styled.MashUp>
      <Styled.Seeking>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
        <span>SEEKING</span>
      </Styled.Seeking>
      <Styled.ValueForGrowth>
        <span>VALUE FOR GROWTH</span>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
      </Styled.ValueForGrowth>

      <Styled.ValueFor>
        <span>VALUE FOR</span>
      </Styled.ValueFor>
      <Styled.Growth>
        <span>GROWTH</span>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
      </Styled.Growth>
    </Styled.IntroSection>
  </DefaultLayout>
);

export default IntroSection;