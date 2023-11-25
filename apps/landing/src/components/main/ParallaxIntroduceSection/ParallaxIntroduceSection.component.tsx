import { useEffect, useRef, useState } from 'react';

import * as Styled from './ParallaxIntroduceSection.styled';

const ParallaxIntroduceSection = () => {
  const [isShowIntroduceText, setIsShowIntroduceText] = useState(false);

  const parallaxIntroduceSectionRef = useRef(null);
  const introduceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShowIntroduceText(true);
        } else {
          setIsShowIntroduceText(false);
        }
      });
    });

    if (parallaxIntroduceSectionRef.current) {
      observer.observe(parallaxIntroduceSectionRef.current);
    }
  }, []);

  return (
    <Styled.ParallaxIntroduceSection ref={parallaxIntroduceSectionRef}>
      <Styled.Introduce isShowIntroduceText={isShowIntroduceText} ref={introduceRef}>
        {'LET ME INTRODUCE\nMASH-UP CREW'}
      </Styled.Introduce>
    </Styled.ParallaxIntroduceSection>
  );
};

export default ParallaxIntroduceSection;
