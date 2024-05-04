import { Heading, Navigation } from '@/components/common';

import * as Styled from './Header.styled';

const Header = () => (
  <Styled.Header>
    <Styled.HeaderInner>
      <Heading />
      <Navigation />
    </Styled.HeaderInner>
  </Styled.Header>
);

export default Header;
