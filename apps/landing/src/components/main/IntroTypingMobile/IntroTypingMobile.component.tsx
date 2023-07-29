import { useEffect, useRef, useState } from 'react';

import * as Styled from './IntroTypingMobile.styled';

const MASK_LINE_ID = {
  first: 'first-mask-line',
  second: 'second-mask-line',
  third: 'third-mask-line',
  fourth: 'fourth-mask-line',
  fifth: 'fifth-mask-line',
};

const IntroTypingMobile = () => {
  const [isMaskLineIntersect, setIsMaskLineIntersect] = useState({
    [MASK_LINE_ID.first]: false,
    [MASK_LINE_ID.second]: false,
    [MASK_LINE_ID.third]: false,
    [MASK_LINE_ID.fourth]: false,
    [MASK_LINE_ID.fifth]: false,
  });

  const firstLineMaskRef = useRef<HTMLDivElement>(null);
  const secondLineMaskRef = useRef<HTMLDivElement>(null);
  const thirdLineMaskRef = useRef<HTMLDivElement>(null);
  const fourthLineMaskRef = useRef<HTMLDivElement>(null);
  const fifthLineMaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsMaskLineIntersect((prevState) => ({ ...prevState, [entry.target.id]: true }));
        } else {
          setIsMaskLineIntersect((prevState) => ({ ...prevState, [entry.target.id]: false }));
        }
      });
    });

    if (firstLineMaskRef.current) {
      observer.observe(firstLineMaskRef?.current);
    }
    if (secondLineMaskRef.current) {
      observer.observe(secondLineMaskRef.current);
    }
    if (thirdLineMaskRef.current) {
      observer.observe(thirdLineMaskRef.current);
    }
    if (fourthLineMaskRef.current) {
      observer.observe(fourthLineMaskRef.current);
    }
    if (fifthLineMaskRef.current) {
      observer.observe(fifthLineMaskRef.current);
    }
  }, []);

  return (
    <Styled.TypingContainer>
      <Styled.TextRelative>
        <span>매쉬업은 IT에 관심있는 개발자와 디자이너가</span>
        <Styled.MaskLine
          id={MASK_LINE_ID.first}
          isMaskLineIntersect={isMaskLineIntersect[MASK_LINE_ID.first]}
          ref={firstLineMaskRef}
        />
      </Styled.TextRelative>
      <Styled.TextRelative>
        <span>협업하여 창의적인 서비스를 만들고, 성장을</span>
        <Styled.MaskLine
          id={MASK_LINE_ID.second}
          isMaskLineIntersect={isMaskLineIntersect[MASK_LINE_ID.second]}
          ref={secondLineMaskRef}
        />
      </Styled.TextRelative>
      <Styled.TextRelative>
        <span>위한 스터디, 기업 후원을 통한 여러 리크루팅 등</span>
        <Styled.MaskLine
          id={MASK_LINE_ID.third}
          isMaskLineIntersect={isMaskLineIntersect[MASK_LINE_ID.third]}
          ref={thirdLineMaskRef}
        />
      </Styled.TextRelative>
      <Styled.TextRelative>
        <span>성장을 위한 다양한 프로그램을 개최하고</span>
        <Styled.MaskLine
          id={MASK_LINE_ID.fourth}
          isMaskLineIntersect={isMaskLineIntersect[MASK_LINE_ID.fourth]}
          ref={fourthLineMaskRef}
        />
      </Styled.TextRelative>
      <Styled.TextRelative>
        <span>즐거움을 위해 만남의 기회를 제공합니다</span>
        <Styled.MaskLine
          id={MASK_LINE_ID.fifth}
          isMaskLineIntersect={isMaskLineIntersect[MASK_LINE_ID.fifth]}
          ref={fifthLineMaskRef}
        />
      </Styled.TextRelative>
    </Styled.TypingContainer>
  );
};

export default IntroTypingMobile;
