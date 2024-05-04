import { DefaultLayout } from '@/components/common';
import { IntroTyping, IntroTypingMobile } from '@/components/main';
import { useDetectViewport } from '@/hooks';

import * as Styled from './IntroTypingSection.styled';

const IntroTypingSection = () => {
  const { viewportSize } = useDetectViewport();

  return (
    <Styled.IntroTypingSection>
      <DefaultLayout>
        {viewportSize === 'MOBILE' ? <IntroTypingMobile /> : <IntroTyping />}
      </DefaultLayout>
    </Styled.IntroTypingSection>
  );
};

export default IntroTypingSection;
