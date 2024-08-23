import { DefaultLayout } from '@/components/common';
import { TViewPortSize } from '@/constants';
import { useDetectViewport } from '@/hooks';

import * as Styled from './IntroSection.styled';

const LINEAR_GRADIENT_SPHERE_DIAMETER: Record<TViewPortSize, string> = {
  DESKTOP: '128rem',
  NOTEBOOK: '86.4rem',
  TABLET_L: '64.8rem',
  TABLET_S: '46.1rem',
  MOBILE: '37.5rem',
} as const;

const LINEAR_GRADIENT_SPHERE_POSITION_TOP: Record<TViewPortSize, string> = {
  DESKTOP: '33.4259%',
  NOTEBOOK: '32.6388%',
  TABLET_L: '36.9444%',
  TABLET_S: '36.9028%',
  MOBILE: '31.6341%',
} as const;

const IntroSection = () => {
  const { viewportSize } = useDetectViewport();

  return (
    <Styled.IntroSection>
      <DefaultLayout>
        <Styled.IntroSectionLayout>
          <Styled.MashUp>
            <span>MASH-UP</span>
            <Styled.GradientLineWrapper>
              <Styled.GradientLine />
            </Styled.GradientLineWrapper>
          </Styled.MashUp>
          <Styled.Seeking>
            <Styled.GradientLineWrapper>
              <Styled.GradientLine />
            </Styled.GradientLineWrapper>
            <span>SEEKING</span>
          </Styled.Seeking>
          <Styled.ValueForGrowth>
            <span>VALUE FOR GROWTH</span>
            <Styled.GradientLineWrapper>
              <Styled.GradientLine />
            </Styled.GradientLineWrapper>
          </Styled.ValueForGrowth>

          <Styled.ValueFor>
            <span>VALUE FOR</span>
          </Styled.ValueFor>
          <Styled.Growth>
            <span>GROWTH</span>
            <Styled.GradientLineWrapper>
              <Styled.GradientLine />
            </Styled.GradientLineWrapper>
          </Styled.Growth>
          <Styled.FadeUpLinearGradientSphere
            diameter={LINEAR_GRADIENT_SPHERE_DIAMETER[viewportSize]}
            position="absolute"
            top={LINEAR_GRADIENT_SPHERE_POSITION_TOP[viewportSize]}
            left="0"
          />
          <Styled.LinearGradientSphereDeem />
        </Styled.IntroSectionLayout>
      </DefaultLayout>
    </Styled.IntroSection>
  );
};

export default IntroSection;
