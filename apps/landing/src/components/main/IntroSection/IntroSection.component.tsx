import { DefaultLayout } from '@/components/common';
import * as Styled from './IntroSection.styled';

const IntroSection = () => (
  <DefaultLayout>
    <Styled.IntroSection>
      <Styled.IntroTextAlignLeft>
        <span>MASH-UP</span>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
      </Styled.IntroTextAlignLeft>
      <Styled.IntroTextAlignRight>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
        <span>SEEKING</span>
      </Styled.IntroTextAlignRight>
      <Styled.IntroTextAlignLeft>
        <span>VALUE FOR GROWTH</span>
        <Styled.GradientLineWrapper>
          <Styled.GradientLine />
        </Styled.GradientLineWrapper>
      </Styled.IntroTextAlignLeft>
    </Styled.IntroSection>
  </DefaultLayout>
);

export default IntroSection;
