import { createPngUrl } from 'constant';
import { useInView } from 'react-intersection-observer';

import * as Styled from './MashongSection.styled';

const MashongSection = () => {
  const { ref: fixedTriggerElementElementRef, inView: isFixedTriggerElementInView } = useInView();
  const { ref: bottomTriggerElementElementRef, inView: isBottomTriggerElementInView } = useInView();

  return (
    <Styled.MashongSection>
      <Styled.ViewPortHeightElement isBottom={isBottomTriggerElementInView}>
        <Styled.BackgroundTextWrapper>
          <Styled.GradientText isInteractionTrigger={isFixedTriggerElementInView}>
            MASH-UP CREW
          </Styled.GradientText>
          <Styled.BorderText isInteractionTrigger={isFixedTriggerElementInView}>
            MASH-UP CREW
          </Styled.BorderText>
        </Styled.BackgroundTextWrapper>

        <Styled.MashongImage
          src={createPngUrl('landing/mashong')('mashong-mashup-3x-min')}
          alt=""
          isFixed={isFixedTriggerElementInView}
        />
      </Styled.ViewPortHeightElement>

      <Styled.FixedTriggerElement ref={fixedTriggerElementElementRef} />
      <Styled.BottomTriggerElement ref={bottomTriggerElementElementRef} />
    </Styled.MashongSection>
  );
};

export default MashongSection;
