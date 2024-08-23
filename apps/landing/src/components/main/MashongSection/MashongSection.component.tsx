import { createPngUrl } from 'constant';
import { useRef } from 'react';

import * as Styled from './MashongSection.styled';

const MashongSection = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.MashongSection>
      <Styled.MashongSectionScrollArea ref={scrollAreaRef}>
        <Styled.BackgroundTextWrapper>
          <Styled.GradientText>MASH-UP CREW</Styled.GradientText>
          <Styled.BorderText>MASH-UP CREW</Styled.BorderText>
        </Styled.BackgroundTextWrapper>
      </Styled.MashongSectionScrollArea>
      <Styled.MashongImage src={createPngUrl('landing/mashong')('mashong-mashup-3x-min')} alt="" />
    </Styled.MashongSection>
  );
};

export default MashongSection;
