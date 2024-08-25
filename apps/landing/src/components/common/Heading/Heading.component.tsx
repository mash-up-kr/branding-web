import { ROUTES } from '@/constants';

import * as Styled from './Heading.styled';

const Heading = () => (
  <h1>
    <Styled.LinkToHome href={ROUTES.HOME}>
      <Styled.MashUpLogo />
      <Styled.MashUp>Mash-Up</Styled.MashUp>
    </Styled.LinkToHome>
  </h1>
);

export default Heading;
