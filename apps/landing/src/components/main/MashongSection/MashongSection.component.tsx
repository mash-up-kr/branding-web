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

      <Styled.MashongDescriptionRelativeElement
        isFullHeight={!isBottomTriggerElementInView && isFixedTriggerElementInView}
      >
        <Styled.MashongDescriptionContainer
          isFixed={isBottomTriggerElementInView && isFixedTriggerElementInView}
          isHide={!isFixedTriggerElementInView}
        >
          <Styled.TextWrapper>
            <Styled.TitleWrapper>
              <Styled.Title>매숑이</Styled.Title>
              <Styled.Tag>aka. 버그</Styled.Tag>
            </Styled.TitleWrapper>
            <Styled.Description>
              {
                '매쉬업의 초특급 귀염둥이, 매숑이.\n매쉬업의 마스코트를 담당하고 있으며 하얗고 풍성한 털로 뛰어난 외모를 가지고 있어 매쉬업 크루에게 사랑받고 있습니다.\n\n어느 날 매쉬업 리크루팅 404 페이지에서 탄생했으며 아직 꿈이 많은 어린 꿈나무로 개발자와 디자이너 등 다양한 직무를 자유롭게 넘나들며 성장하고 있습니다.\n\n가끔 기분이 좋으면 하얀 솜뭉치처럼 통통 뛰어다니는 모습을 포착할 수 있습니다.'
              }
            </Styled.Description>
          </Styled.TextWrapper>
        </Styled.MashongDescriptionContainer>
      </Styled.MashongDescriptionRelativeElement>

      <Styled.FixedTriggerElement ref={fixedTriggerElementElementRef} />
      <Styled.BottomTriggerElement ref={bottomTriggerElementElementRef} />
    </Styled.MashongSection>
  );
};

export default MashongSection;
