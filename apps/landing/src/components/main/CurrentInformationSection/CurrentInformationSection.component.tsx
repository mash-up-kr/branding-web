import { LinearGradientSphere } from 'ui';

import { TViewPortSize } from '@/constants';
import { useDetectViewport } from '@/hooks';

import * as Styled from './CurrentInformationSection.styled';

const LINEAR_GRADIENT_SPHERE_DIAMETER: Record<TViewPortSize, string> = {
  DESKTOP: '50rem',
  NOTEBOOK: '50rem',
  TABLET_L: '40rem',
  TABLET_S: '30rem',
  MOBILE: '25rem',
} as const;

const CURRENT_INFO = [
  {
    title: '직장인/학생 비율',
    description: '7:3',
  },
  {
    title: '누적 수료 인원',
    description: '500명+',
  },
  {
    title: '현재 활동중인 크루',
    description: '86명',
  },
  {
    title: '최근 경쟁률',
    description: '23:1',
  },
] as const;

const CurrentInformationSection = () => {
  const { viewportSize } = useDetectViewport();

  return (
    <Styled.CurrentInformationSection>
      <Styled.CurrentInfoWrapper>
        {CURRENT_INFO.map(({ title, description }) => (
          <Styled.CurrentInfo key={title}>
            <Styled.CurrentInfoTitle>{title}</Styled.CurrentInfoTitle>
            <Styled.CurrentInfoDescription>{description}</Styled.CurrentInfoDescription>
          </Styled.CurrentInfo>
        ))}
      </Styled.CurrentInfoWrapper>
      <LinearGradientSphere
        diameter={LINEAR_GRADIENT_SPHERE_DIAMETER[viewportSize]}
        position="absolute"
        top="50%"
        left="0"
        transform="translate3d(0, -50%, 0)"
      />
    </Styled.CurrentInformationSection>
  );
};

export default CurrentInformationSection;
