import { DefaultLayout } from '@/components/common';
import * as Styled from './IntroSection.styled';

const IntroSection = () => (
  <DefaultLayout>
    <Styled.IntroSection>
      <Styled.IntroTextAlignLeft>MASH-UP</Styled.IntroTextAlignLeft>
      <Styled.IntroTextAlignRight>SEEKING</Styled.IntroTextAlignRight>
      <Styled.IntroTextAlignLeft>VALUE FOR GROWTH</Styled.IntroTextAlignLeft>
    </Styled.IntroSection>
  </DefaultLayout>
);

export default IntroSection;
