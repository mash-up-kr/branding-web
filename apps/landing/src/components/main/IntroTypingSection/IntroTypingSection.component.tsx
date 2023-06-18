import { DefaultLayout } from '@/components/common';

import * as Styled from './IntroTypingSection.styled';

const IntroTypingSection = () => (
  <Styled.IntroTypingSection>
    <DefaultLayout>
      <Styled.TypingContainer>
        매쉬업은 IT에 관심있는 개발자와 디자이너가 협업하여 창의적인 서비스를 만들고, 성장을 위한
        스터디, 기업 후원을 통한 여러 리크루팅 등 성장을 위한 다양한 프로그램을 개최하고 즐거움을
        위해 만남의 기회를 제공합니다
      </Styled.TypingContainer>
    </DefaultLayout>
  </Styled.IntroTypingSection>
);

export default IntroTypingSection;
