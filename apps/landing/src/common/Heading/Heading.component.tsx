import { MashUpLogo } from 'ui';
import * as Styled from './Heading.styled';
import { useDetectViewport } from '@/hooks';
import { TViewPortSize } from '@/constants';

const MASH_UP_LOGO_SIZE: Readonly<Record<TViewPortSize, number>> = {
  DESKTOP: 44,
  NOTEBOOK: 44,
  TABLET_L: 36,
  TABLET_S: 24,
  MOBILE: 24,
};

const Heading = () => {
  const { viewportSize } = useDetectViewport();

  return (
    <Styled.Heading>
      <MashUpLogo size={MASH_UP_LOGO_SIZE[viewportSize]} />
      <Styled.MashUp>Mash-Up</Styled.MashUp>
    </Styled.Heading>
  );
};

export default Heading;
