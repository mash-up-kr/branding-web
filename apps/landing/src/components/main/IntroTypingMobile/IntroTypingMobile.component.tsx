import { useInView } from 'react-intersection-observer';

import * as Styled from './IntroTypingMobile.styled';

const IntroTypingMobile = () => {
  const { ref: textWrapperRef, inView: isTextWrapperInView } = useInView();

  return (
    <Styled.TypingContainer>
      <Styled.TextWrapper ref={textWrapperRef}>
        <Styled.TextRelative isInView={isTextWrapperInView}>
          <span>매쉬업은 IT에 관심있는 개발자와 디자이너가</span>
          <Styled.MaskLine />
        </Styled.TextRelative>
        <Styled.TextRelative isInView={isTextWrapperInView}>
          <span>협업하여 창의적인 서비스를 만들고, 성장을</span>
          <Styled.MaskLine />
        </Styled.TextRelative>
        <Styled.TextRelative isInView={isTextWrapperInView}>
          <span>위한 스터디, 기업 후원을 통한 여러 리크루팅 등</span>
          <Styled.MaskLine />
        </Styled.TextRelative>
        <Styled.TextRelative isInView={isTextWrapperInView}>
          <span>성장을 위한 다양한 프로그램을 개최하고</span>
          <Styled.MaskLine />
        </Styled.TextRelative>
        <Styled.TextRelative isInView={isTextWrapperInView}>
          <span>즐거움을 위해 만남의 기회를 제공합니다</span>
          <Styled.MaskLine />
        </Styled.TextRelative>
      </Styled.TextWrapper>
    </Styled.TypingContainer>
  );
};

export default IntroTypingMobile;
